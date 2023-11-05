const path = require('path');
const express = require('express');
const Post = require('../models/post.js');
const router = express.Router();

router.get('/:id', async ( req, res ) => {
  const post = await Post.findById(req.params.id);
  res.render('../views/post.ejs', {data: post});
})

module.exports = router;