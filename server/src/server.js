const express = require('express');
const app = express();
var session = require('express-session');
var sharedsesseion = require('express-socket.io-session');
const setHeaders = require('./utils/setHeaders');
const bodyParser = require('./utils/bodyParser');
const authenticationRouter = require('./routers/authentication.router');
const postsRouter = require('./routers/posts.router');
const usersRouter = require('./routers/users.router');
const bookingRouter = require('./routers/booking.router');
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


// testing path
app.get('/publications', (req, res) => {
  res.send([]);
});

//setting routers
app.use('/authentication', authenticationRouter);
app.use('/posts', postsRouter);
app.use('/users', usersRouter);
app.use('/booking', bookingRouter);
module.exports = app;
