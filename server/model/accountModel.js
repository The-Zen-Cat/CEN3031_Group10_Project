const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const Account = mongoose.model(
  'Account',
  (new mongoose.Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    zipcode: { type: Number, required: true, min: 501, max: 99950 },
    types: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Type' }]
  }).pre('save', function (next) {
    let user = this;
    if (!user.isModified('password')) return next();

    bcrypt.gebSalt(SALT_WORK_FACTOR, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  }).methods.comparePass = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
    });
  })
);

module.exports = Account;
