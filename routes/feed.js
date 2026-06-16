const express = require('express');

const feedController = require('../controller/feed');

const router = express.Router();

router.get('/post', feedController.getPosts);

// router.post('/posts', feedController.createPost);
router.post('/post', feedController.createPost); // alias for clients using /feed/post

module.exports = router; 
