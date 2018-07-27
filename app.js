var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');
var axios = require('axios');
var circularjson = require('circular-json');

app.listen(8080);

const LOGIN = 'brian.lim@intelex.com';
const PASSWORD = 'U7IAGCq6YNwgPcsH2u5DEDD9';

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {

  socket.on('test', function (data) {
    console.log('data');
    socket.emit('test receive', { data: 'testing' });
  });

  socket.on('jira-request', function (data) {
    console.log('request:' + JSON.stringify(data));
    axios.get(data.url, { auth: { username: LOGIN, password: PASSWORD } })
      .then(response => {
        console.log('response:' + circularjson.stringify(response));
        socket.emit('jira-response', { type: data.type, data: circularjson.stringify(response) });
      }).catch(error => {
        console.log('error:' + error);
      });
  });

});