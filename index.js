const config = require('config');
const koa = require('koa');
const app = koa();
const compose = require('koa-compose');
const middlewareStack = require('./middlewares');
const router = require('./routes');
const bot = require('./bot');
const path = require('path');
const fs = require('fs');
const features = fs.readdirSync(path.join(__dirname, 'public')).sort();

features.forEach(function(feature) {
  require('./public/' + feature);
});

app.use(compose(middlewareStack));
app.use(router.routes());


app.listen(config.PORT);
