const app = require('./src/server');
const dotenv = require('dotenv');
const socket = require('./src/utils/socket');
const http = require('http');

const server = http.createServer(app);

dotenv.config();
const port = process.env.PORT || 3001;

// stablish connection to DB
const { connectToDB } = require('./src/database');
connectToDB();

server.listen(port, () => {
  socket(server);
  console.log(`Server is listinening on port ${port}`);
});
