/* eslint-disable consistent-return */
// Router
const router = require('express').Router();
const mongoose = require('mongoose');
// model from moongodb
const Users = require('../../model/user');
// validate register input
const validateRegisterInputs = require('../../validation/register');
const validateLoginInputs = require('../../validation/login');

/**
 *  Post Request to register a new User
 *  Path: v1/api/user/register
 */
router.post('/register', (req, res, next) => {
  const { errors, isValid } = validateRegisterInputs(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Users.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        errors.email = 'Email exist';
        return res.status(409).json({ error: errors });
      }
      const defaultAvatar =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqlaxdI3EIEf2voJ56Ut0G_M9pXJhUYgQXQaKLMzL5yJ81cbUt';
      new Users({
        _id: mongoose.Types.ObjectId(),
        email: req.body.email,
        username: req.body.username,
        date: req.body.date,
        avatar: defaultAvatar,
        password: req.body.password,
      })
        .save()
        .then((result) => {
          console.log(result);
          res.status(201).json({
            message: 'User Created',
            request: {
              type: 'POST',
              info: result,
            },
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: err,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
/**
 *  POST request to login user
 *  Path: v1/api/user/login
 */
router.post('/login', (req, res, next) => {
  const { errors, isValid } = validateLoginInputs(req.body);
  if (!isValid) {
    return res.status(409).json(errors);
  }
  Users.find({ email: req.body.email })
    .exec()
    .then((user) => {
      // check if user is already in database or not. return errors with status 401 if not found
      if (user.length < 1) {
        errors.email = ' User not found';
        return res.status(401).json(errors);
      }
      if (user[0].password !== req.body.password) {
        return res.status(500).json({
          message: 'Auth fail!',
        });
      }
      res.status(200).json({
        message: 'Success login',
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
/**
 *  GET request to get current user
 */
router.get('/current', (req, res) => {
  // TODO
  res.json({
    id: 'checking',
  });
});

module.exports = router;
