const path = require('path');
const express = require('express');
const router = express.Router();

let posts = [];

const genRand = () => { 
  return Math.floor(Math.random()*900000+100000);
}

const middle = express.urlencoded({
  extended: false,
  limit: 10000,
  parameterLimit: 6
})

router.get('/new-post', ( req, res ) => {
  res.send('salut');
});

router.post('/new-post', middle, ( req, res ) => {
  const payload = req.body;
  if (!payload) {
    return res.status(400).send("Failed");
  }
  const id = genRand().toString();
  payload.id = id;
  posts.push(payload);
  res.redirect("http://localhost:3000/");
});

router.get('/', ( req, res ) => {
  res.render('../views/home', {data: posts});
})

router.get('/:category', ( req, res ) => {
  let postsInCategory = [];
  posts.forEach( (post) => {
    console.log(post.category);
    if (post.category.toLowerCase() === req.params.category) {
      postsInCategory.push(post);
    } else {
      res.status(404);
    }
  });
  res.render('../views/home', {data: postsInCategory})
});

module.exports = router;