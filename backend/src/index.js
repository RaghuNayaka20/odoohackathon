require('dotenv').config();

const http = require('http');

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

server.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
