const mongoose = require('mongoose');

/**
 * Account Type datamodel
 */
const Type = mongoose.model(
  'Type',
  new mongoose.Schema({
    name: String
  })
);

module.exports = Type;
