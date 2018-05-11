const { Entry } = require('../models/createDatabase');

module.exports = (textInput) => {
  const entryDocument = new Entry({ content: textInput });

  entryDocument.save((err) => {
    /* eslint-disable no-console */
    if (err) console.error(err);
  });
};
