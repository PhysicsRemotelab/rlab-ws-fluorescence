## Commands
List devices using command and find serial port of correct device
```
npm install -g @serialport/list
serialport-list
```

Start application by specifying correct serial port and http port, for example:
```
npm start --serial-port=COM3
```

Start application by specifying correct serial port, for example:
```
npm run server-sensor --serial-port=/dev/ttyUSB1
npm run server-commands --serial-port=/dev/ttyUSB0
```

Device ID for fluorescence sensor:
```
usb-FTDI_FT232R_USB_UART_AD3H0NJD-if00-port0	FTDI
```

Device ID for fluorescence motor control:
```
usb-1a86_USB_Serial-if00-port0	1a86
```
