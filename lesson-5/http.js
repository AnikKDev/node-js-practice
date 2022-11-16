const http = require('http');
// * most important module
const port = 5000;
// ======================================================

// ! creating a server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello programmers!!');
        res.write('How you doing!!');
    }
    else if (req.url === '/about') {
        res.write('Know more about us');
    } else {
        res.write('Not found');
    }
    res.end();

});

/* server.on('connection', () => {
    console.log('Inside of the server on listener')
}) */
// ? ei server ta hocche ekta event emitter
server.listen(port);

console.log(`Listening on port ${port}`)