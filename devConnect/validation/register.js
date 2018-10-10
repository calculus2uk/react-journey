const Validator = require('validator');
const IsEmpty = require('./is-empty');

function validatorRegisterInput(data) {
  let errors = {};

  data.name = !IsEmpty(data.name) ? data.name : '';
  data.email = !IsEmpty(data.email) ? data.email : '';
  data.password = !IsEmpty(data.password) ? data.password : '';
  data.password2 = !IsEmpty(data.password2) ? data.password2 : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name Must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least six characters long';
  }
  if (Validator.isEmpty(data.password2, { min: 6, max: 30 })) {
    errors.password2 =
      'Password must be at least six characters field is required';
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }
  return {
    errors,
    isValid: IsEmpty(errors)
  };
}

module.exports = validatorRegisterInput;
