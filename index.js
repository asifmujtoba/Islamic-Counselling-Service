const app = require('./server/server');
const dotenv = require('dotenv');
const express = require('express');
var path = require('path');
const socket = require('./server/src/utils/socket');
const http = require('http');

const server = http.createServer(app);

dotenv.config();


app.use(express.static('dist'));

app.get('*', (req, res) =>{
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
})

app.set('port', process.env.PORT || 3000);

// stablish connection to DB
const { connectToDB } = require('./server/src/database');
connectToDB();

server.listen(app.get('port'), () => {
  socket(server);
  console.log(`Server is listinening on port ${process.env.PORT}`);
});
