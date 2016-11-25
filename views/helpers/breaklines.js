const Handlebars = require('handlebars');

module.exports = function(text) {

  text = Handlebars.Utils.escapeExpression(text);
  text = text.replace(/(\r\n|\r|\n)/gm, '<br>');
  return new Handlebars.SafeString(text);
};
