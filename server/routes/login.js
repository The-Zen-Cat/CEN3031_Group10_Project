const express = require('express');
const router = express.Router();
const AccountModel = require('../model/accountModel');

let login = function (username, password) {
  AccountModel.findOne({ username: username }, (err, user) => {
    if (err) throw err;
    user.comparePassword(password, (err, isMatch) => {
      if (err) throw err;
      console.log('passsword matching check:' + isMatch);
      return isMatch;
    });
  });
};

router.post('/login', (req, res) => {
  if (login(req.body.username, req.body.password)) {
    req.session.loggedIn = true;
    req.session.username = req.body.username;
  } else {
    res.sendStatus(401);
  }
});
