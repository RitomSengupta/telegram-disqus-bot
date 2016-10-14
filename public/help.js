const bot = require('../bot');

bot.onText(/^\/help/, (message) => {
  bot.sendMessage(message.from.id, `Look\'s what i can..
  
Use me in inline mode to format parts of discussions. For example, @disqusbot Very awesome part of discussion. Than choose _type_

Formats available:

*DISCUSSION* Fridays party

*MAJOR* 18:00 Lovely pizza

*MINOR* What about sushi?

_Comment_ Common guys! Lets DO IT!

\`\`\`
module.exports = {
  HEROKU_URL: process.env.HEROKU_URL,
  PORT: process.env.PORT,
  TOKEN: process.env.TOKEN
};
\`\`\``, {parse_mode: 'Markdown'});
});
