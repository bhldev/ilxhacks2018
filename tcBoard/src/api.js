import openSocket from 'socket.io-client';
const socket = openSocket('http://' + window.location.hostname + ':8001');
export function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 3000);
}
export function subscribeToLed(sb) {
  socket.on('led', state => sb(state));
  socket.emit('subscribeToLed', true);
}
export function subscribeToPush(pb) {
    socket.on('push', state => pb(state));
    socket.emit('subscribeToPush', true);
  }
  export const jiraConnector = {
    search: searchnode,
    funcs: {},
  };

  export function subscribeToJiraConnector(){
    socket.on('jira-response', function (data) {
      console.log(data);
      var dataStr = JSON.stringify(data);
      switch (data.type) {
        case 'DASHBOARD':
          var func = jiraConnector.funcs['DASHBOARD'];
          console.log('dashboard:' + dataStr);
          if (typeof(func) === 'function') { func(); };
          break;
        case 'SEARCH':
          var func = jiraConnector.funcs['DASHBOARD'];
          console.log('search:' + dataStr);
          if (typeof(func) === 'function') { func(); };
          break;
        default:
          console.log('data:' + dataStr);
      }
    });
  }
  const sendJiraRequest = (type, url, callback) => {
    socket.emit('jira-request', { type: type, url: encodeURI(url) });
  }
  
  export function searchnode(key, value, callback) {
    jiraConnector.funcs['SEARCH'] = callback;
    var url = 'https://intelex.atlassian.net/rest/api/2/search?jql="' + key + '"="' + value + '"';
    sendJiraRequest('SEARCH', url);
  }