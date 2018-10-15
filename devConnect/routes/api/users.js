const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
//
const keys = require('../../config/keys');
const User = require('../../models/user');

// Load Input validation
const validatorRegisterInput = require('../../validation/register');
const validatorLoginInput = require('../../validation/login');

// @route         POST api/users/login
// @description   Login User / Returning JWT Token
// @access        Public
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const { errors, isValid } = validatorLoginInput(req.body);

  if (!isValid) res.status(400).json(errors);

  //Find User by Email
  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = 'User Not Found';
      return res.status(404).json(errors);
    }
    //Check Pasword
    bcrypt.compare(password, user.password).then(isMatch => {
      //User Matched
      if (isMatch) {
        // Extract user info as a payload
        const payload = { id: user.id, name: user.name, avatar: user.avatar };

        //Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({ success: true, token: 'Bearer ' + token });
          }
        );
      } else {
        errors.password = 'Password Incorrect';
        return res.status(400).json(errors);
      }
    });
  });
});

// @route         POST api/users/register
// @description   Register User / Returning JWT Token
// @access        Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validatorRegisterInput(req.body);

  // Check validation
  if (!isValid) return res.status(400).json(errors);

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: 'Email already exist' });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200', //  Size
        r: 'pg', // Rating - Parental gauidance
        d: 'mm' //  Default
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route         GET api/users/current
// @description   Returning Current User
// @access        Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);
module.exports = router;
