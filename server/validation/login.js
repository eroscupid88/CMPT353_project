const validate = require('validator');
const isEmpty = require('./isempty');

module.exports = function validateLoginInput(data) {
  const errors = {};
  return {
    error: errors,
    isValid: isEmpty(errors),
  };
};
