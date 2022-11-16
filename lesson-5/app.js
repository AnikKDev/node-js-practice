const path = require('path');
const myPath = 'E:/Web-Development/LWS-Notejs/node-core-modules/index.js';
const os = require('os');
const fs = require('fs');
// impaort EventEmitter class
/* const EventEmitter = require('events');
const emitter = new EventEmitter(); */
const School = require('../school');
// create an instance(object from the school class)
const school = new School();
// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.cpus())
// console.log(path.basename(myPath))
// console.log(path.parse(myPath))


// to write(create a file with content)
/* fs.writeFileSync('newFile.txt', 'This has been created with fs module(write filesync)')
fs.appendFileSync('newFile.txt', 'apppended data)') */
/* const data = fs.readFileSync('newFile.txt');
console.log(data.toString()); */

// asynchronous way
// asyncronous way te hobe taai readfile ta wait kore baki kaaj gulo hoye jabe. etake io te diye dibe. erpor porer line gulo execute kora start korbe. pore jokhon data chole ashbe tokhon seta ekta callback er maddhome receive korbe. jetar first param hobe err ar second ta hobe data.
/* fs.readFile('newFile.txt', (err, data) => {
    if (err) {
        return console.log(err)
    }
    console.log(data.toString())
}) */



// events
// create an listener for the event so that when that the event happen, the listener will register as well and give a result via callback

// jei event diye event emit korbo, shei event diyei event ke listen korte hobe. (!important)

// ===============
// age event register korte hobe. erpor listen korte hobe. must need to follow the order
// with class instance from different file
school.on('bellRing', (parameter) => {
    console.log(`Event has triggered, we need to run! ${parameter}`)
})
// raise an event
// emitter.emit('bellRing', 'Because this is scary!!!');

// with class instance from different file
school.startPerioud()