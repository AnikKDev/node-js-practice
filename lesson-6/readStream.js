const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

/* ourReadStream.on('data', (chunk) => {
    ourWriteStream.write(chunk);
}) */

// with pipe
ourReadStream.pipe(ourWriteStream);