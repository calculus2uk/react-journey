const Validator = require('validator');
const IsEmpty = require('./is-empty');

function validatorLoginInput(data) {
  let errors = {};

  data.email = !IsEmpty(data.email) ? data.email : '';
  data.password = !IsEmpty(data.password) ? data.password : '';

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: IsEmpty(errors)
  };
}

module.exports = validatorLoginInput;
