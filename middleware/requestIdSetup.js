const uuid = require('node-uuid');
const cls = require('continuation-local-storage');
const requestIdKey = require('../const').requestIdKey;


module.exports = function(req, res, next) {
  var ns = cls.createNamespace('ns');
  ns.run(function() {
    var id = uuid.v4();
    if (req.header(requestIdKey)) {
      ns.set('requestId', req.header(requestIdKey));
      return next();
    }
    ns.set('requestId', id);

    return next();
  });
};
