const fs = require('fs');

// ? creating a read stream
/* const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf-8');

ourReadStream.on('data', (chunk) => {
    console.log(chunk);
}) */

const http = require('http');
// * most important module
const port = 5000;
// ======================================================

// ! creating a server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head></html>');
        res.write(
            '<body><form method="post" action="/data-post"><input name="message" /></form></body>'
        );
        res.end();
    }
    else if (req.url === '/data-post' && req.method === "POST") {
        const body = [];
        // this will return data with each chunk
        req.on('data', (chunk) => {
            body.push(chunk)
        });

        // this will return all the data together after completing the stream
        req.on('end', () => {
            console.log('stream finished');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
        })
        res.write('Thank you for submitting');
        res.end();
    }
    else if (req.url === '/about') {
        res.write('Know more about us');
        res.end();
    } else {
        res.write('Not found');
        res.end();
    }


});

/* server.on('connection', () => {
    console.log('Inside of the server on listener')
}) */
// ? ei server ta hocche ekta event emitter
server.listen(port);

console.log(`Listening on port ${port}`)