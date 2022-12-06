const express = require('express');
const router = express.Router();
const AccountModel = require('../model/accountModel');

router.get('/', (req, res) => {
  if (!req.session.loggedIn);
  let signupQuery = req.query.paramsArray;
  console.log('input user name: ' + signupQuery.username);

  AccountModel.find({ username: signupQuery.username }, (err, user) => {
    if (err) throw err;
    console.log(user);
    if (user.length >= 1) {
      res.status(200).json('user already exists');
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
      res.status(200).json('sign up successful');
    }
  });
});

module.exports = router;
