const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/journal');

/* eslint-disable no-console */
const db = mongoose.connection;
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
