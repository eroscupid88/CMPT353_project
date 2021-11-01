const validator = require('validator');
const isEmpty = require('./isempty');

module.exports = function validateRegisterInputs(data) {
  const errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (validator.isEmpty(data.password)) {
    errors.password = 'password field is required';
  }
  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = ' Passwords must match ';
  }
  if (validator.isEmpty(data.password2)) {
    errors.password2 = 'confirm password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
