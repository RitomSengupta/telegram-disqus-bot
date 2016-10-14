const config = require('config');
const bot = require('../bot');
const Router = require('koa-router');
let router = new Router();

router.post('/', function*(next) {
  this.body = 'ok';
});

router.post('/' + config.TOKEN, function*(next) {
  bot.processUpdate(this.request.body);
  this.body = 'ok';
});


module.exports = router;
