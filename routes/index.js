var express = require('express');
var router = express.Router();
var logger = require('../lib/logger');

/* GET home page. */
router.get('/', function(req, res) {
  logger.info('I am Root!');
  res.send('hello world');
});

module.exports = router;
