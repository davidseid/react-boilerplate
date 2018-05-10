const { Entry } = require('../models/createDatabase');

module.exports = (textInput) => {
  const entryDocument = new Entry({ content: textInput });

  entryDocument.save((err) => {
    if (err) console.error(err);
  });
};
