var cls = require('continuation-local-storage');
var bunyan = require('bunyan');

function retrieveRequestId() {
  var ns = cls.getNamespace('ns');
  if (!ns) {
    // namespace not initialized, outsid of request chain
    return;
  }
  var id = ns.get('requestId');
  return id;
}

var loggingFunctions = [
  'fatal',
  'error',
  'warn',
  'info',
  'debug',
  'trace'
];

var logger = bunyan.createLogger({
  name: 'request-id-poc',
  stream: process.stdout,
  level: 'debug'
});

loggingFunctions.forEach(function(f) {
  var originalFunction = logger[f];
  logger[f] = function() {
    var id = retrieveRequestId();
    // call the original if outside of a request chain
    if (!id) {
      return originalFunction.apply(logger, arguments);
    }
    // use simpleChild flag for performance
    var child = logger.child({requestId: retrieveRequestId()}, true);
    child[f].apply(child, arguments);
  };
});

module.exports = logger;