const router = require('express').Router();
const passport = require('passport');

// load profile user  Model
const Profile = require('../../model/profile');
const User = require('../../model/user');
const validateProfileInputs = require('../../validation/profile');

/**
 * API to get profile
 */
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user[0].id })
      .populate('user', ['username', 'email', 'avatar'])
      .then((profile) => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this user';
          return res.status(404).json(errors);
        }
        res.json(profile);
      })

      .catch((error) => {
        res.status(404).json({ something: error });
      });
  }
);

// v1/profile/profileusername/:profileusername
// get profile by profileusername
// public
router.get('/profileusername/:profileusername', (req, res) => {
  const errors = {};
  Profile.findOne({ profileusername: req.params.profileusername })
    .populate('user', ['name', 'avatar'])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch((err) => res.status(404).json(err));
});

// get profile/all
// get company user profile
// get all profiles
// public
router.get('/all', (req, res) => {
  const errors = {};
  Profile.find()
    .populate('user', ['avatar', 'name'])
    .then((profiles) => {
      if (!profiles) {
        errors.noprofile = 'There are no profiles';
        return res.status.json(errors);
      }
      res.json(profiles);
    })
    .catch((err) =>
      res.status(404).json({ profile: ' There are no profiles' })
    );
});

// get profile/user/:user_id
// get profile by user_id
// public

router.get('/user/:user_id', (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.params.user_id })
    .populate('user', ['name', 'avatar'])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch((err) =>
      res.status(404).json({
        err,
        profile: 'there is no profile for this user',
      })
    );
});

// post profile
// create or update user profile
// private

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInputs(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    // Get fields
    const profileFields = {};
    profileFields.user = req.user[0].id;
    if (req.body.profileusername)
      profileFields.profileusername = req.body.profileusername;
    if (req.body.githubusername)
      profileFields.githubusername = req.body.githubusername;
    if (req.body.firstname) profileFields.firstname = req.body.firstname;
    if (req.body.lastname) profileFields.lastname = req.body.lastname;
    if (req.body.location) profileFields.location = req.body.location;

    // social media
    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;
    // find profile of the user.
    Profile.findOne({ user: req.user[0].id }).then((result) => {
      if (result) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user[0].id },
          { $set: profileFields },
          { new: true }
        ).then((profile) => res.json(profile));
      } else {
        // Check if handle exists
        Profile.findOne({
          profileusername: profileFields.profileusername,
        }).then((found) => {
          if (found) {
            errors.profileusername = 'That username already exists';
            res.status(400).json(errors);
          }

          // Save Profile
          new Profile(profileFields)
            .save()
            .then((profile) => res.json(profile));
        });
      }
    });
  }
);

// delete profile/
// delete  profile
// private

router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    Profile.findOneAndRemove({ user: req.user[0].id }).then(() =>
      res.json({ success: true })
    );
  }
);

module.exports = router;
