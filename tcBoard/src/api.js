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
    getNew: getNew,
    getReadyForDevelopment: getReadyForDevelopment,
    getInDevelopment: getInDevelopment,
    getNeedsCodeReview: getNeedsCodeReview,
    getReadyForTesting: getReadyForTesting,
    inTesting: inTesting,
    getReadyForReview: getReadyForReview,
    getDone: getDone,
    getWillNotImplement: getWillNotImplement,
    getSprint: getSprint,
    funcs: {},
  };

  export function subscribeToJiraConnector(){
    socket.on('jira-response', function (data) {
      console.log(data);
      var dataStr = JSON.stringify(data);
      console.log(data.type.toLowerCase() + dataStr);
      var func = jiraConnector.funcs[data.type.toUpperCase()];
      if (typeof(func) === 'function') { func(data); };
    });
  }

  const sendJiraRequest = (type, url, callback) => {
    socket.emit('jira-request', { type: type, url: encodeURI(url) });
  }

  export const getUrl = (key, value) => {
    return 'https://intelex.atlassian.net/rest/api/2/search?jql="' + key + '"="' + value + '"';
  }

  export const getUrl2 = (key, value, key2, value2) => {
    return 'https://intelex.atlassian.net/rest/api/2/search?jql="' + key + '"="' + value + '" AND "' + key2 + '" = "' + value2 + '"';
  }

  export function searchnode(key, value, callback) {
    jiraConnector.funcs['SEARCH'] = callback;
    sendJiraRequest('SEARCH', getUrl(key, value));
  }

  export function getNew(sprint, callback) {
    jiraConnector.funcs['NEW'] = callback;
    sendJiraRequest('NEW', getUrl2('Status', 'New', 'Sprint', 'Cloud - Sprint ' + sprint));
  }

  export function getReadyForDevelopment(sprint, callback) {
    jiraConnector.funcs['READYDEV'] = callback;
    sendJiraRequest('READYDEV', getUrl2('Status', 'Ready For Development', 'Sprint', 'Cloud - Sprint ' + sprint));
  }

  export function getInDevelopment(sprint, callback) {
    jiraConnector.funcs['DEV'] = callback;
    sendJiraRequest('DEV', getUrl2('Status', 'In Development', 'Sprint', 'Cloud - Sprint ' + sprint));
  }

  export function getNeedsCodeReview(sprint, callback) {
    jiraConnector.funcs['CODEREVIEW'] = callback;
    sendJiraRequest('CODEREVIEW', getUrl2('Status', 'Needs Code Review', 'Sprint', 'Cloud - Sprint ' + sprint));
  }

  export function getReadyForTesting(sprint, callback) {
    jiraConnector.funcs['READYTEST'] = callback;
    sendJiraRequest('READYTEST', getUrl2('Status', 'Ready For Testing', 'Sprint', 'Cloud - Sprint ' + sprint));
  }

  export function inTesting(sprint, callback) {
    jiraConnector.funcs['INTESTING'] = callback;
    sendJiraRequest('INTESTING', getUrl2('Status', 'In Testing', 'Sprint', 'Cloud - Sprint ' + sprint));

  }

  export function getReadyForReview(sprint, callback) {
    jiraConnector.funcs['READYREVIEW'] = callback;
    sendJiraRequest('READYREVIEW', getUrl2('Status', 'Ready For Review', 'Sprint', 'Cloud - Sprint ' + sprint));
  }

  export function getDone(sprint, callback) {
    jiraConnector.funcs['DONE'] = callback;
    sendJiraRequest('DONE', getUrl2('Status', 'Done', 'Sprint', 'Cloud - Sprint ' + sprint));
  }

  export function getWillNotImplement(sprint, callback) {
    jiraConnector.funcs['NOTIMPLEMENT'] = callback;
    sendJiraRequest('NOTIMPLEMENT', getUrl2('Status', 'Will not implement', 'Sprint', 'Cloud - Sprint ' + sprint));
  }

  export function getSprint(sprintId, callback) {
    var sprintIdFix = sprintId || 338
    jiraConnector.funcs['DASHBOARD'] = callback;
    sendJiraRequest('DASHBOARD', 'https://intelex.atlassian.net/rest/greenhopper/1.0/gadgets/sprints/health?rapidViewId=17&sprintId=' + sprintIdFix);
  }