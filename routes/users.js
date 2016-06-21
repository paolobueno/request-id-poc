var express = require('express');
var router = express.Router();
var logger = require('../lib/logger');
var getUsers = require('../middleware/getUsers');

/* GET users listing. */
router.get('/', getUsers, function(req, res) {
  logger.info('Returning all users');
  res.send(req.users);
});

module.exports = router;
