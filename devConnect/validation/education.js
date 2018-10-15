const Validator = require('validator');
const IsEmpty = require('./is-empty');

function validatorEducationInput(data) {
  let errors = {};

  data.school = !IsEmpty(data.school) ? data.school : '';
  data.degree = !IsEmpty(data.degree) ? data.degree : '';
  data.fieldOfStudy = !IsEmpty(data.fieldOfStudy) ? data.fieldOfStudy : '';
  data.from = !IsEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(data.school)) {
    errors.school = 'School field is required';
  }
  if (Validator.isEmail(data.degree)) {
    errors.degree = 'Degree Field is invalid';
  }
  if (Validator.isEmail(data.fieldOfStudy)) {
    errors.fieldOfStudy = 'FieldOfStudy Field is invalid';
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = 'From date field is required';
  }

  return {
    errors,
    isValid: IsEmpty(errors)
  };
}

module.exports = validatorEducationInput;
