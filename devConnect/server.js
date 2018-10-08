const express = require('express');
const mongoose = require('mongoose');

//Routes
const users = require('./routes/api/users');

//App initialization
const app = express();

const port = process.env.PORT || 5000;

mongoose
  .connect(
    'mongodb://localhost/devConnect',
    { useNewUrlParser: true }
  )
  .then(() => console.log('Sucesfully connected to MongoDb...'))
  .catch(err => console.log('Could not connect to DB'));

app.get('/', (req, res) => res.send('Hello World'));

//Use Middleware
app.use('/api/users', users);

//Listening on Port
app.listen(port, () => console.log(`Server is running on port ${port}`));
