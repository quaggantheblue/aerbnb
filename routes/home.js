const path = require('path');
const express = require('express');
const router = express.Router();

let posts = [];

function genRand() { 
  return Math.floor(Math.random()*900000+100000);
}

function findPostIndexById(id) {
  return index = posts.findIndex((post) => {
    return post.id == id;
  });
}

const middle = express.urlencoded({
  extended: false,
  limit: 10000,
  parameterLimit: 8
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
  payload.date = new Date().toUTCString().split(' ').slice(1).slice(0, -2).join(' ');
  posts.unshift(payload);
  res.redirect("http://localhost:3000/");
});

router.post('/edit-post', middle, ( req, res ) => {
  const payload = req.body;
  if (!payload) {
    return res.status(400).send("Failed");
  }
  posts[findPostIndexById(payload.id)] = payload;
  res.redirect("http://localhost:3000/");
});

router.delete('/:id', ( req, res ) => {
  posts.splice(findPostIndexById(req.params.id), 1);
  res.end();
});

router.get('/', ( req, res ) => {
  res.render('../views/home', {data: posts});
})

router.get('/:category', ( req, res ) => {
  let postsInCategory = [];
  posts.forEach( (post) => {
    if (post.category.toLowerCase() === req.params.category) {
      postsInCategory.push(post);
    } else {
      res.status(404);
    }
  });
  res.render('../views/home', {data: postsInCategory})
});

module.exports.router = router;
module.exports.posts = posts;