const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

/**
 * Set up the Schema for the accounts
 * @param {string} username - username
 * @param {string} password - password in plaintext before encryption
 * @param {int} zipcode - zipcode, constrained to real zipcodes
 * @param {Object} usertype - database user type
 * @author Thor Johansson
 */
var AccountSchema = new mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  zipcode: { type: Number, required: true, min: 501, max: 99950 },
  userType: { type: String, required: false },
  types: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Type' }]
});

/**
 * ecryption automation on save
 */
AccountSchema.pre('save', function (next) {
  let user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

/**
 * Compare plaintext input to ecnrypted password present in the database
 * @param {string} candidatePassword - passsword to check against the account
 * @callback cb - mongoose callback
 */
AccountSchema.methods.comparePass = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;
