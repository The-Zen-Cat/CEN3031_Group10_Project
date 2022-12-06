//initialize the things for .env variable TODO: THIS IS NOT WORKING
const dotenv = require('dotenv');
dotenv.config({ path: './sconfig.env' });

//nodemon installed for easy server refreshes!
const express = require('express'); //bring in express
// eslint-disable-next-line no-unused-vars
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
const sessionStore = MongoStore.create({ mongoUrl: process.env.MONGO_URI });

connectDB();

const PORT = process.env.SERVER_PORT || 3001; //server listening port - 3001 for dev, likely env var in production

const app = express(); //initialize express/app

//initialize middleware
//logger logs request url and time in console
app.use(logger);

//Body Parser Middleware
app.use(express.json());

//cors
app.use(cors());

const corsConfig = {
  credentials: true,
  origin: true
};
app.use(cors(corsConfig));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

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
app.use('/api/addResource', require('./routes/api/addResource'));

//
app.use('/api/login', require('./routes/login'));
app.use('/api/logout', require('./routes/logout'));
app.use('/api/signup', require('./routes/signup'));
app.use('/api/isloggedin', require('./routes/isloggedin'));
app.use('/api/zipCheck', require('./routes/zipCheck'));

app.listen(PORT, () => {
  //sets listening port & logs in console
  console.log(`Sever running on ${PORT}`);
});
