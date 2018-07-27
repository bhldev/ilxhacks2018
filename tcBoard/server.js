const io = require('socket.io')();
//const Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
//const LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is outputconst io = require('socket.io')();
//const pushButton = new Gpio(17, 'in', 'both'); //use GPIO pin 17 as input, and 'both' button presses, and releases should be handled
const axios = require('axios');
const circularjson = require('circular-json');
const LOGIN = 'brian.lim@intelex.com';
const PASSWORD = 'U7IAGCq6YNwgPcsH2u5DEDD9';

io.on('connection', (client) => {

  /*
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
  client.on('subscribeToLed', (state) => {
    console.log('client is subscribing to LED ', state);
    client.emit('led', state);
    LED.writeSync(state ? 1 : 0);
  });
  client.on('subscribeToPush', (state) => {
    console.log('client is subscribing to PUSH ', state);
    pushButton.watch(function (err, state) { //Watch for hardware interrupts on pushButton GPIO, specify callback function
	if (err) {console.error('There was an error', err); return; }
       client.emit('push', !state);
       LED.writeSync(state ? 1 : 0);
     });
  });
*/

client.on('jira-request', function (data) {
    console.log('request:' + JSON.stringify(data));
    axios.get(data.url, { auth: { username: LOGIN, password: PASSWORD } })
      .then(response => {
        console.log('response:' + circularjson.stringify(response));
        client.emit('jira-response', { type: data.type, data: response.data });
      }).catch(error => {
        console.log('error:' + error);
      });
  });
  
});
const port = 8001;
io.listen(port);
console.log('listening on port ', port);
process.on('SIGINT', function () { //on ctrl+c
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport LED GPIO to free resources
  pushButton.unexport(); // Unexport Button GPIO to free resources
console.log('exit completely');
  process.exit(); //exit completely
});
