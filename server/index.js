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
var cors = require('cors');

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

//Url Encoded Data Middleware
app.use(express.urlencoded({ extended: false }));

/*
  API routes
*/
app.get('/', (req, res) => res.send('your base server url is working'));

//filterresources route
app.use('/api/filterResources', require('./routes/api/filterResources'));
app.use('/api/manageResource', require('./routes/api/manageResource'));

app.listen(PORT, () => {
  //sets listening port & logs in console
  console.log(`Sever running on ${PORT}`);
});
