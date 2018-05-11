const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/journal');

const db = mongoose.connection;
/* eslint-disable no-console */
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const entrySchema = mongoose.Schema({
  content: String,
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports.db = db;
module.exports.Entry = Entry;
