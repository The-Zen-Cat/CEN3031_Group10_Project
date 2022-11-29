const express = require('express');
const router = express.Router();

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    console.log(err);
  });
  res.send('testmessage');
});
