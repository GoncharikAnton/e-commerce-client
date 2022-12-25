const express = require('express');
const router = express.Router();
const db = require('../database');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('session-id', {title: 'express', sessionID: req.sessionID});
  console.log(11111111111111111111111111111111111)
});
router.post('/', function(req, res, next) {
  res.json('session-id', {title: 'express', sessionID: req.sessionID});
});

module.exports = router;
