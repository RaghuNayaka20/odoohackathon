require('dotenv').config();

const http = require('http');
const connectToDatabase = require('./config/db');

const port = process.env.PORT || 5000;

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'application/json');

  if (request.method === 'GET' && request.url === '/health') {
    response.statusCode = 200;
    response.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  response.statusCode = 404;
  response.end(JSON.stringify({ error: 'Route not found' }));
});

async function startServer() {
  try {
    await connectToDatabase();

    server.listen(port, () => {
      console.log(`Backend server running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
}

startServer();
