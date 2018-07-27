import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import Header from './Header.js';
import './App.css';
import { subscribeToTimer, subscribeToLed, subscribeToPush, subscribeToJiraConnector, jiraConnector } from './api';
//import Iframe from 'react-iframe';
import { timingSafeEqual } from 'crypto';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  constructor() {
    super();
    subscribeToJiraConnector();
  }
  state = {
    lightOn: false,
    pushed: false,
    timestamp: 'no timestamp yet'
  };

  getData() {
    console.log('getting data');
    // search('sprint', 'Cloud - Sprint 59', function (data) {   document.getElementById('search-results').innerHTML = data; });
    jiraConnector.search('sprint', 'Cloud - Sprint 59', data => { console.log('got data'); this.displayData(data) })
  }

  displayData(data) {
    console.log(data);
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

const Body = () => (
  <Grid divided='vertically'>
    <Grid.Row columns={1}>
      <Grid.Column>
        1
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
        1
      </Grid.Column>
      <Grid.Column>
        2
      </Grid.Column>
      <Grid.Column>
        3
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default App;
