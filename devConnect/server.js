const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportFile = require('./config/passport');

//Routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profiles');

//App initialization
const app = express();

mongoose
  .connect(
    'mongodb://localhost/devConnect',
    { useNewUrlParser: true }
  )
  .then(() => console.log('Sucesfully connected to MongoDb...'))
  .catch(err => console.log('Could not connect to DB'));

// Pasport Middleware
app.use(passport.initialize());
passportFile(passport);

//Passport Config

//Use Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/users', users);
app.use('/api/profiles', profile);

//Listening on Port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
