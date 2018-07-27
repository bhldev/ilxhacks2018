var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');
var axios = require('axios');
var circularjson = require('circular-json');

app.listen(8080);

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

});