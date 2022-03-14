const { SerialPort } = require('serialport');

const CLOCKWISE = '1';
const COUNTERCLOCKWISE = '2';
const STOP = '3';

class Sensor {
    init() {
        this.port = new SerialPort({
            path: 'COM4', 
            baudRate: 9600
        });
    }

    async write(data) {
        this.port.write(data);
        this.port.write('\n');
    }

    async delay(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

async function main() {
    const sensor = new Sensor();
    sensor.init();
    await sensor.delay(2000);
    sensor.write(CLOCKWISE);
    await sensor.delay(2000);
    sensor.write(COUNTERCLOCKWISE);
    await sensor.delay(2000);
    sensor.write(STOP);
}

main();
