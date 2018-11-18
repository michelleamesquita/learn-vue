
var http = require('http');
var axios = require('axios');
var SerialPort = require('serialport');
var serialport = new SerialPort('/dev/cu.usbmodem14131', {
    baudRate: 9600
});
serialport.on("open", function () {
   
    console.log('Data:', port.read());
});


axios.post('/Home')
  .then(function(response){
    console.log(response.data); 
    
  });  

