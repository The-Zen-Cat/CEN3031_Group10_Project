const express = require('express');
const router = express.Router();

/**
 * Destroys the session on logout request sent by server
 * @see {@link https://www.npmjs.com/package/express-session} for more info on session managment
 * @author Thor Johansson
 */
router.get('/', (req, res) => {
  console.log('loggedouttesttesttest');
  req.session.destroy((err) => {
    console.log(err);
  });
  console.log('loggedout');
  res.send('testmessage');
});

module.exports = router;
