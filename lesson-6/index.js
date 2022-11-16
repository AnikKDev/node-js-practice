const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf-8');
    myReadStream.pipe(res)
})


server.listen(8000);

console.log('listening to server 8000')