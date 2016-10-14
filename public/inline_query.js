const InlineQueryResultArticles = require('../constants');
const bot = require('../bot');

bot.on('inline_query', (inlineQuery) => {
  if (!inlineQuery.query) {
    return;
  }

  const results = InlineQueryResultArticles.map(item => {
    if (item.title === 'CODE') {
      item.input_message_content.message_text = `\`\`\`${inlineQuery.query}\`\`\``;

      return item;
    }

    item.input_message_content.message_text = `${item.input_message_content.message_text} ${inlineQuery.query}`;

    return item;
  });


  bot.answerInlineQuery(inlineQuery.id, results);
});
