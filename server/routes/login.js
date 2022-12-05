const express = require('express');
const router = express.Router();
const AccountModel = require('../model/accountModel');
const session = require('express-session');
router.get('/', (req, res) => {
  console.log('is logged in: ', req.session.loggedIn);
  console.log('username: ', req.session.id);
  console.log(req.query);
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
        req.session.save((err) => {
          if (err) return this.next(err);
          res.sendStatus(200);
        });
      } else {
        res.sendStatus(401);
      }
    });
  });
});

module.exports = router;
