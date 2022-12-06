const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('loggedouttesttesttest');
  req.session.destroy((err) => {
    console.log(err);
  });
  console.log('loggedout');
  res.send('testmessage');
});

module.exports = router;
