// create company
// private
// Router
const router = require('express').Router();

const isEmpty = require('../../validation/isempty');
// model from mongoose
const Company = require('../../model/company');

const User = require('../../model/user');

const Profile = require('../../model/profile');

const passport = require('passport');

const validateCompanyInputs = require('../../validation/company');

const mongoose = require('mongoose');

/**
 * REST API to create a company
 */
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCompanyInputs(req.body);
    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    const description = !isEmpty(req.body.description)
      ? req.body.description
      : '';
    const newCompany = new Company({
      _id: mongoose.Types.ObjectId(),
      name: req.body.name,
      //  test
      owner: req.user[0].id,
      description: description,
    });
    // create new company
    newCompany
      .save()
      .then((result) => {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user[0].id },
          { company: result.id },
          { new: true }
        ).then((profile) => res.send(profile));
        res.json(result);
      })
      .catch((error) => {
        res.status(404).json(error);
      });
  }
);
/**
 * Rest API to get a company
 */
router.get('/', (req, res) => {
  Company.find()
    .then((company) => res.json(company))
    .catch((err) =>
      res.status(404).json({ nocompanyfound: 'No company found ' })
    );
});

/**
 * rest API to get company by id
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  Company.findById(req.params.id)
    .then((company) =>
      res.json({
        name: company.name,
        description: company.description,
        total_employee: company.staff.length + 1,
      })
    )
    .catch((err) =>
      res.status(404).json({
        nocompanyfound: `No company found with that + ${id}`,
      })
    );
});

/**
 * Rest API to delete company
 */
router.delete(
  '/:id',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user[0].id }).then((user) =>
      Company.findById(req.params.id)
        .then((company) => {
          // check for post owner
          if (company.owner.toString() !== user.id)
            return res.status(401).json({
              notauthorized: 'User not authorized',
            });
          company.remove().then(() => res.status(204).json({ success: true }));
        })
        .catch((err) => res.status(404).json(err))
    );
  }
);

/**
 * REST API to hire staff
 */

router.post(
  '/staff/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Company.findOne({ owner: req.user[0].id })
      .populate('User')
      .then(
        (company) => {} // find user
        // Company.findOne(req.params.id)
        //   .then((post) => {
        //     // filter to find out if user already like it or not
        //
        //     // explain tim ra id of like roi turn to be string because req.user[0].id is a string, neu that id chinh la id dcua user va length> 0 like da ton tai> fail
        //     if (
        //       post.likes.filter((like) => like.user.toString() === req.user[0].id)
        //         .length === 0
        //     ) {
        //       const removeIndex = post.dislikes
        //         .map((item) => item.user.toString())
        //         .indexOf(req.user[0].id);
        //       // splice out of array and remove it
        //       post.dislikes.splice(removeIndex, 1);
        //
        //       // add user id to likes array
        //       post.likes.unshift({ user: req.user[0].id });
        //
        //       post.save().then((post) => res.json(post));
        //     } else if (
        //       post.likes.filter((like) => like.user.toString() === req.user[0].id)
        //         .length > 0
        //     ) {
        //       return res
        //         .status(400)
        //         .json({ alreadyliked: 'User already liked this post' });
        //     }
        //   })
        //   .catch((err) => res.status(404).json(err))
      )
      .catch((err) => {
        res.json({
          noowner: 'you does not own a company',
        });
      });
  }
);

module.exports = router;
