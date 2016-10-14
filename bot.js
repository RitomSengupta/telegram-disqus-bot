const config = require('config');
const Bot = require('node-telegram-bot-api');
const bot = new Bot(config.TOKEN);

bot.setWebHook(config.HEROKU_URL + config.TOKEN);

module.exports = bot;
