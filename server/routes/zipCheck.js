const express = require('express');
const router = express.Router();
const AccountModel = require('../model/accountModel');

/**
 * Checks if the zipcode is available for user signup and returns result to the webpage
 * @author Zachary Schirm
 */
router.get('/', (req, res) => {
  console.log('req.query.paramsarray: ' + req.query.paramsArray);
  let zipCode = req.query.paramsArray;
  AccountModel.find({ zipcode: zipCode.zipcode }, (err, user) => {
    if (err) throw err;
    console.log(user);
    console.log(zipCode.zipcode);
    if (user.length != 0 || zipCode.zipcode == 0 || zipCode.zipcode.length != 5) {
      res.status(200).json('ZipCodeTaken!');
    } else {
      res.status(200).json('ZipCodeAvailable!');
    }
  });
});
module.exports = router;
