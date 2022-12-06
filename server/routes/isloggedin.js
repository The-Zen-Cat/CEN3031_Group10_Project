const express = require('express');
const router = express.Router();

/**
 * Api call from the website to check logged in status of a user
 * @author Zachary Schirm
 */
router.get('/', (req, res) => {
  console.log('is logged in TEST: ', req.session.loggedIn);
  console.log('session id: ', req.session.id);
  console.log('Query' + req.query);
  if (req.session.loggedIn == true) {
    res.status(200).json('Logged In!');
  } else {
    res.status(200).json('Not logged in :-(');
  }
});
module.exports = router;
