/* eslint-disable consistent-return */
// Router
const router = require('express').Router();
// model from moongodb
const Users = require('../../model/user');
// validate register input
const validateRegisterInputs = require('../../validation/register');

/**
 *  Post Request to register a new User
 *  Path: /api/user/register
 */
router.post('/register', (req, res, next) => {
  const { errors, isValid } = validateRegisterInputs(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  res.json({
    status: 200,
  });
});
/**
 *  POST request to login user
 *  Path: /api/user/login
 */
router.post('/login', (req, res, next) => {
  // TODO
  res.json({ body: req.body });
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
