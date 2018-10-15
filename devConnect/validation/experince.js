const Validator = require('validator');
const IsEmpty = require('./is-empty');

function validatorExperinceInput(data) {
  let errors = {};

  data.title = !IsEmpty(data.title) ? data.title : '';

  data.company = !IsEmpty(data.company) ? data.company : '';
  data.from = !IsEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Job field is required';
    console.log(errors);
  }

  if (Validator.isEmail(data.company)) {
    errors.company = 'Company Field is invalid';
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'From date field is required';
  }

  return {
    errors,
    isValid: IsEmpty(errors)
  };
}

module.exports = validatorExperinceInput;
