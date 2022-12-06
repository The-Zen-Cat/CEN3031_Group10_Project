const express = require('express');
const router = express.Router();
const AccountModel = require('../model/accountModel');

/**
 * Login request that sets the active session to the user that logged in
 * Note, this does a check against the database and currently is not sql safe
 * @summary Sets session based on login
 * @param {string} username - The username
 * @param {string} password - the password to check against the database
 * @author Thor Johansson
 */
router.get('/', (req, res) => {
  console.log('is logged in: ', req.session.loggedIn);
  console.log('username: ', req.session.id);
  console.log(req.query.paramsArray);
  let loginQuery = req.query.paramsArray;

  AccountModel.findOne({ username: loginQuery.username }, (err, user) => {
    if (err) throw err;
    if (!user) return res.sendStatus(401);
    user.comparePass(loginQuery.password, (err, isMatch) => {
      if (err) throw err;
      console.log('passsword matching check:' + isMatch);
      if (isMatch) {
        req.session.loggedIn = true;
        req.session.username = loginQuery.username;
        console.log('logged in session ID:' + req.session.id);
        req.session.save((err) => {
          if (err) return this.next(err);
          res.status(200).json('Logged In!');
        });
      } else {
        res.sendStatus(401).json('Not Logged In!');
      }
    });
  });
});

module.exports = router;
