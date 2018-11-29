const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load Validation
const validatorPostInput = require('../../validation/post');

// Load Post Model
const Post = require('../../models/post');
// Load Profilr Model
const Profile = require('../../models/profile');

// @route         Get api/posts
// @description   Test post route
// @access        Public
router.get('/test', (req, res) => res.json({ msg: 'Posts route works' }));

// @route         Get api/posts
// @description   get all posts route
// @access        Private
router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ noPostFound: 'No post found ' }));
});

// @route         Get api/posts
// @description   Get post by id route
// @access        Private
router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(404).json({ noPostFound: 'No posts found with that ID' })
    );
});

// @route         Get api/posts
// @description   Create post route
// @access        Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatorPostInput(req.body);

    //Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }
    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });

    newPost.save().then(post => res.json(post));
  }
);

// @route         Delete api/posts
// @description   Delete post route
// @access        Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          // Check for post owner
          if (post.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notAuthorized: 'User not authorized ' });
          }

          //Delete
          post.remove().then(() => res.json({ success: true }));
        })
        .catch(err =>
          res.status(404).json({ postNotFound: 'No post found with that Id' })
        );
    });
  }
);

module.exports = router;
