const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/:id', ( req, res ) => {
  res.send(`post: ${req.params.id}`);
})

module.exports = router;