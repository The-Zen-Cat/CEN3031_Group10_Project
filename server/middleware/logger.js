// eslint-disable-next-line no-unused-vars
const moment = require('moment');

//middleware; make sure to use next if multiple
//logs server requests to console w/ url and time
const logger = (req, res, next) => {
  //console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
  next();
};

module.exports = logger;
