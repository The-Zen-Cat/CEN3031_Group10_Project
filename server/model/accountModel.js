const mongoose = require('mongoose');

const Account = mongoose.model(
  'Account',
  new mongoose.Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    types: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Type' }]
  })
);

module.exports = Account;
