var logger = require('../lib/logger.js');
module.exports = function(req, res, next) {
  logger.info("Cheers, love! The cavalry's here!");
  req.users = [{
    name: 'Lena',
    surname: 'Oxton'
  }];
  next();
};