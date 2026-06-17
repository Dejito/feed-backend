const express = require('express');

const feedController = require('../controller/feed');

const router = express.Router();

// Support plural endpoints used by clients and keep singular aliases
router.get('/posts', feedController.getPosts);
router.get('/post', feedController.getPosts); // alias for /feed/post

router.post('/posts', feedController.createPost);
router.post('/post', feedController.createPost); // alias for /feed/post

module.exports = router; 
