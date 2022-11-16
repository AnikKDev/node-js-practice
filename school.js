const EventEmitter = require('events');
// create a class for event emitter
class School extends EventEmitter {
    startPerioud() {
        console.log('class started');
        this.emit('bellRing', 'Because this is scary!!!');
    }
}

module.exports = School;