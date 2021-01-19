const app = require('./server');
const dotenv = require('dotenv');
const socket = require('./utils/socket');
const http = require('http');

const server = http.createServer(app);

dotenv.config();
const port = process.env.PORT || 3001;

// stablish connection to DB
const { connectToDB } = require('./database');
connectToDB();

server.listen(port, () => {
  socket(server);
  console.log(`Server is listinening on port ${port}`);
});
