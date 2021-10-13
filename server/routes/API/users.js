// Router
const router = require('express').Router();

const Users = require('../../model/user');

/**
 *  Post Request to register a new User
 *  Path: /api/user/register
 */
router.post('/register', (req, res, next) => {
  // TODO
});
/**
 *  POST request to login user
 *  Path: /api/user/login
 */
router.post('/login', (req, res, next) => {
  // TODO
});
/**
 *  GET request to get current user
 */
router.get('/current', (req, res) => {
  // TODO
});

module.exports = router;
