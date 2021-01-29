const express = require('express');
const app = express();
var session = require('express-session');
var sharedsesseion = require('express-socket.io-session');
const setHeaders = require('./src/utils/setHeaders');
const bodyParser = require('./src/utils/bodyParser');
const authenticationRouter = require('./src/routers/authentication.router');
const usersRouter = require('./src/routers/users.router');
const bookingRouter = require('./src/routers/booking.router');
const contactRouter = require('./src/routers/contact.router');
const newsletterRouter = require('./src/routers/newsletter.router');
// set headers to avoid CORS Policy
app.use(setHeaders);
// parser the body of the request
app.use(bodyParser);
app.use(session({
  username: '',
  userId:'',
  secret: 'secret4321',
  resave: true,
  saveUninitialized: true
}));


//setting routers
app.use('/authentication', authenticationRouter);
app.use('/users', usersRouter);
app.use('/booking', bookingRouter);
app.use('/contact', contactRouter);
app.use('/newsletter', newsletterRouter);
module.exports = app;
