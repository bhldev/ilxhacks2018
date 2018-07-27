const io = require('socket.io')();

// TODO CHANGE URL
const socket = io('http://10.10.121.7:8080');

export const funcs = {};

export const search = {
  search: search
  funcs {};
};

io.on('connect', (client) => {

  client.on('jira-response', function (data) {
    console.log(data);
    var dataStr = JSON.stringify(data);
    switch (data.type) {
      case 'DASHBOARD':
        var func = search.funcs['DASHBOARD'];
        console.log('dashboard:' + dataStr);
        if (typeof(func) === 'function') { func(); };
        break;
      case 'SEARCH':
        var func = search.funcs['DASHBOARD'];
        console.log('search:' + dataStr);
        if (typeof(func) === 'function') { func(); };
        break;
      default:
        console.log('data:' + dataStr);
    }
  });

})

const sendJiraRequest(type, url, callback) {
  socket.emit('jira-request', { type: type, url: encodeURI(url) });
}

export const search(key, value, callback) {
  search.funcs['SEARCH'] = callback;
  var url = 'https://intelex.atlassian.net/rest/api/2/search?jql="' + key + '"="' + value + '"';
  sendJiraRequest('SEARCH', 'https://intelex.atlassian.net/rest/api/2/dashboard/10116');
}
