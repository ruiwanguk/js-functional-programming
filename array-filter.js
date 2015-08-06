function getShortMessages(messages) {
  return messages.filter(function short(message) {
    return message.message.length < 50;
  }).map(function getMessage(message) {
    return message.message;
  });
}

module.exports = getShortMessages;
