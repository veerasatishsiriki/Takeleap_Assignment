
// Write a simple Node.js HTTP server that listens on port 3000 and responds with a JSON Object when accessed using api call.
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/api' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Hello, this is a JSON response!' }))
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found')
    }
});


server.listen(3000, () => {
    console.log('Server is listening on port 3000')
})
