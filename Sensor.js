const { SerialPort } = require('serialport');

class Sensor {
    init(serialport) {
        this.port = new SerialPort({
            path: serialport, 
            baudRate: 9600
        });
    }

    async rotateClockwise() {
        await this.delay(100);
        this.port.write('1');
        this.port.write('\n');
    }

    async rotateCounterClockwise() {
        await this.delay(100);
        this.port.write('2');
        this.port.write('\n');
    }

    async stopRotation() {
        await this.delay(100);
        this.port.write('3');
        this.port.write('\n');
    }

    async delay(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

module.exports = Sensor;