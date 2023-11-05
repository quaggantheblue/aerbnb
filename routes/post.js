const path = require('path');
const express = require('express');
const homeRouter = require('./home.js');
const router = express.Router();

router.get('/:id', ( req, res ) => {
  homeRouter.posts.forEach(post => {
    if (post.id == req.params.id) {
      res.render('../views/post', {data: post});
    }
  })
})

module.exports = router;