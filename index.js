function log(msg, options = {
  loudness: 'default'
}) {
  if (options && options.loudness) {
    switch (options.loudness) {
      case 'shout':
        console.log(msg.toUpperCase());
        break;
      case 'whisper':
        console.log(msg.toUpperCase());
        break;
      default:
        console.log(msg);
    }
  }
};
module.exports = log;