const BRANCH = {
  type: 'article',
  id: '1',
  title: 'NAME',
  description: 'Get the name of current Discussion',
  input_message_content: {
    message_text: '*DISCUSSION*',
    parse_mode: 'Markdown'
  }
};

const MAJOR = {
  type: 'article',
  id: '2',
  title: 'MAJOR',
  description: 'Mark the MAJOR path',
  input_message_content: {
    message_text: '*MAJOR*',
    parse_mode: 'Markdown'
  }
};

const MINOR = {
  type: 'article',
  id: '3',
  title: 'MINOR',
  description: 'Mark the MINOR path',
  input_message_content: {
    message_text: '*MINOR*',
    parse_mode: 'Markdown'
  }
};

const VERSION = {
  type: 'article',
  id: '4',
  title: 'PATCH',
  description: 'Add a comment to previous step.',
  input_message_content: {
    message_text: '_Comment_',
    parse_mode: 'Markdown'
  }
};

const CODE = {
  type: 'article',
  id: '5',
  title: 'CODE',
  description: 'Insert code part as pre-formatted',
  input_message_content: {
    message_text: '',
    parse_mode: 'Markdown'
  }
};

module.exports = [BRANCH, MAJOR, MINOR, VERSION, CODE];
