const validator = require('validator');
const isEmpty = require('./isempty');

module.exports = function validateProfileInputs(data) {
  const errors = {};
  data.profileusername = !isEmpty(data.profileusername)
    ? data.profileusername
    : '';
  data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
  data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
  if (!validator.isLength(data.profileusername, { min: 2, max: 40 })) {
    errors.profileusername =
      'profileusername needs to be between 2 and 40 characters';
  }
  if (!validator.isLength(data.firstname, { min: 2, max: 40 })) {
    errors.firstname = 'first name needs to be between 2 and 40 characters';
  }
  if (!validator.isLength(data.lastname, { min: 2, max: 40 })) {
    errors.lastname = 'last name needs to be between 2 and 40 characters';
  }
  if (isEmpty(data.firstname)) {
    errors.firstname = 'first name field is required';
  }
  if (isEmpty(data.lastname)) {
    errors.lastname = 'lastname name field is required';
  }
  if (!isEmpty(data.website)) {
    if (!validator.isURL(data.website)) {
      errors.website = 'not a valid  website URL';
    }
  }
  if (!isEmpty(data.youtube)) {
    if (!validator.isURL(data.youtube)) {
      errors.youtube = 'not a valid youtube URL';
    }
  }
  if (!isEmpty(data.twitter)) {
    if (!validator.isURL(data.twitter)) {
      errors.twitter = 'not a valid twitter URL';
    }
  }
  if (!isEmpty(data.facebook)) {
    if (!validator.isURL(data.facebook)) {
      errors.facebook = 'not a valid facebook URL';
    }
  }
  if (!isEmpty(data.linkedin)) {
    if (!validator.isURL(data.linkedin)) {
      errors.linkedin = 'not a valid linkedin URL';
    }
  }
  if (!isEmpty(data.instagram)) {
    if (!validator.isURL(data.instagram)) {
      errors.instagram = 'not a valid  instagram URL';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
