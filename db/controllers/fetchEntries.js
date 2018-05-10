const { Entry } = require('../models/createDatabase');

module.exports = () => (
  new Promise(((resolve, reject) => {
    Entry.find({})
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      reject(err);
    });
  }))
);
