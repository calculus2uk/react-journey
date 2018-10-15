const Validator = require('validator');
const IsEmpty = require('./is-empty');

function validatorProfileInput(data) {
  let errors = {};

  data.handle = !IsEmpty(data.handle) ? data.handle : '';
  data.status = !IsEmpty(data.status) ? data.status : '';
  data.skills = !IsEmpty(data.skills) ? data.skills : '';

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle needs be between 2 and 40 characters';
  }
  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Profile andle field is invalid';
  }
  if (Validator.isEmpty(data.status)) {
    errors.status = 'Status field is required';
  }
  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Skills field is required';
  }
  if (!IsEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = 'Not a Valid URL';
    }
  }
  if (!IsEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = 'Not a Valid URL';
    }
  }

  if (!IsEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Not a Valid URL';
    }
  }
  if (!IsEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Not a Valid URL';
    }
  }
  return {
    errors,
    isValid: IsEmpty(errors)
  };
}

module.exports = validatorProfileInput;
