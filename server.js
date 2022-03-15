const http = require('http');
const ws = require('ws');
const Sensor = require("./Sensor.js");

const httpPort = process.env.npm_config_http_port ?? 3009;
const serialport = process.env.npm_config_serial_port ?? 'COM4';

let server = http.createServer((req, res) => {
    res.writeHead(200);
});
server.listen(httpPort, () => console.log('Started server on', httpPort));
const wss = new ws.Server({server, path: '/fluorescence'});

wss.on('connection', handleConnection);
let connections = new Array;

const sensor = new Sensor();
sensor.init(serialport);

function handleConnection(client) {
    console.log('New connection');
    connections.push(client);

    client.on('message', (message) => {
        message = message.toString();
        console.log(message);
        handleCommand(message);
    });

    client.on('error', error => {
        console.log('Error', error);
    });

    client.on('close', () => {
        console.log('Connection closed');
        let position = connections.indexOf(client);
        connections.splice(position, 1);
        if (connections.length === 0) {
            console.log('No connections');
        }
    });
}

async function handleCommand(message) {
    message = message.toString();
    console.log('Message', message);
    if (message === "1") {
        console.log('rotateClockwise');
        await sensor.rotateClockwise();
    }
    if (message === "2") {
        console.log('rotateCounterClockwise');
        await sensor.rotateCounterClockwise();
    }
    if (message === "3") {
        console.log('stopRotation');
        await sensor.stopRotation();
    }
}
