const middlewareStack = [
  require('./favicon'),
  require('./logger'),
  require('./errors'),
  require('./bodyParser')
];

module.exports = middlewareStack;