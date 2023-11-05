const path = require('path');
const express = require('express');
const router = express.Router();

const Post = require('../models/post.js');

function genRand() { 
  return Math.floor(Math.random()*900000+100000);
}

const middle = express.urlencoded({
  extended: false,
  limit: 10000,
  parameterLimit: 8
})

router.get('/new-post', ( req, res ) => {
  res.send('salut');
});

router.delete('/:id', async ( req, res ) => {
  await Post.findByIdAndDelete(req.params.id);  
  res.redirect('/');
});

router.post('/new-post', middle, async ( req, res ) => {
  const payload = req.body;
  if (!payload) {
    return res.status(400).send("Failed");
  }
  try {
    await Post.create(payload);
    res.redirect('/');
  } catch (err) {
    res.status(500).send({ error: 'Failed to create article'});
  }
});

router.post('/edit-post', middle, async ( req, res ) => {
  const payload = req.body;
  if (!payload) {
    return res.status(400).send("Failed");
  }
  await Post.updateOne({_id: payload.id}, payload);
  res.redirect("/");
});

router.get('/view-all', async ( req, res ) => {
  const posts = await Post.find().sort({
    createdAt: 'desc'
  });
  res.render('../views/view-all', {data: posts});
})

router.get('/', async ( req, res ) => {
  const posts = await Post.find().sort({
    createdAt: 'desc'
  })
  res.render('../views/home', {data: posts.slice(0, 3)});
})

router.get('/:category', async ( req, res ) => {
  const postsInCategory = await Post.find({category: req.params.category[0].toUpperCase() + req.params.category.slice(1)}).sort({
    createdAt: 'desc'
  });
  res.render('../views/view-all', {data: postsInCategory})
});

module.exports = router;