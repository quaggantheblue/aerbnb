const path = require('path');
const express = require('express');
const homeRouter = require('./home.js');
const router = express.Router();

router.get('/:id', ( req, res ) => {
  homeRouter.posts.forEach(post => {
    if (post.id == req.params.id) {
      res.render('../views/post', {data: post});
    } else {
      console.log(`POST WITH ID ${post.id} DOES NOT MATCH ${req.params.id}`)
    }
  })
})

module.exports = router;