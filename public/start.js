const bot = require('../bot');

bot.onText(/^\/start/, (message) => {
  bot.sendMessage(message.from.id, 'I\'m alive! Use /help for more info');
});