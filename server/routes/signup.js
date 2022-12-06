const express = require('express');
const router = express.Router();
const AccountModel = require('../model/accountModel');

router.get('/', (req, res) => {
  if (!req.session.loggedIn);
  let signupQuery = req.query.paramsArray;
  console.log(signupQuery.username);
  AccountModel.find({ username: signupQuery.usename }, (err, user) => {
    if (err) throw err;
    console.log(user);
    if (!user) {
      res.sendStatus(401);
    } else {
      console.log(user);
      let newUser = new AccountModel({
        username: signupQuery.username,
        password: signupQuery.password,
        zipcode: signupQuery.zipcode,
        userType: signupQuery.userType
      });
      newUser.save(function (err) {
        //if (err) throw err;
        console.log(err);
      });
      res.sendStatus(200);
    }
  });
});

module.exports = router;
