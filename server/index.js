//initialize the things for .env variable TODO: THIS IS NOT WORKING
const dotenv = require('dotenv');
dotenv.config({ path: './sconfig.env' });

//nodemon installed for easy server refreshes!
const express = require('express'); //bring in express
const path = require('path');
const logger = require('./middleware/logger');
// eslint-disable-next-line no-unused-vars
const colors = require('colors'); //this actually is used in errorMiddleWare
const connectDB = require('./config/db');
const MongoStore = require('connect-mongo');
var cors = require('cors');

/**
 * basic session implementation basic
 * @todo clean this up
 */
const oneDay = 1000 * 60 * 60 * 24;
const session = require('express-session');
const { Login } = require('@mui/icons-material');
const sessionStore = MongoStore.create({ mongoUrl: process.env.MONGO_URI });

connectDB();

const PORT = process.env.SERVER_PORT || 3001; //server listening port - 3001 for dev, likely env var in production

const app = express(); //initialize express/app

//initialize middleware
//logger logs request url and time in console
app.use(logger);

//Body Parser Middleware
app.use(express.json());

var whitelist = ['htpp://localhost:3000'];
var corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
//cors
app.use(cors());

//Url Encoded Data Middleware
app.use(express.urlencoded({ extended: false }));

//App Session
app.use(
  session({
    secret: 'homelesshelpersecret',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: oneDay
    }
  })
);
/*
  API routes
*/
app.get('/', (req, res) => res.send('your base server url is working'));

//filterresources route
app.use('/api/filterResources', require('./routes/api/filterResources'));
app.use('/api/manageResource', require('./routes/api/manageResource'));

//
app.use('/api/login', require('./routes/login'));
app.use('/api/logout', require('./routes/logout'));
app.use('/api/signup', require('./routes/signup'));

app.listen(PORT, () => {
  //sets listening port & logs in console
  console.log(`Sever running on ${PORT}`);
});

let mongoose = require('mongoose'),
  User = require('./model/accountModel');
// var testUser = new User({
//   username: 'jmar7778',
//   password: 'Password',
//   zipcode: '33952'
// });

// testUser.save(function (err) {
//   if (err) throw err;
// });

User.findOne({ username: 'jmar777' }, function (err, user) {
  if (err) throw err;
  user.comparePass('Password', function (err, isMatch) {
    if (err) throw err;
    console.log('Testing correct password: ', isMatch);
  });
});
