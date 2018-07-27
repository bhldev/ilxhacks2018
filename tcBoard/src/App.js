import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import Header from './Header';
import Weather from './Weather';
import Messages from './Messages';
import StatusList from './StatusList';
import './App.css';
import { subscribeToPush, subscribeToJiraConnector, jiraConnector } from './api';
//import Iframe from 'react-iframe';
import { timingSafeEqual } from 'crypto';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  constructor() {
    super();
    subscribeToJiraConnector();
    subscribeToPush(state => {
      this.setState({
        pushed: state
      })
    })
    this.state = {
      lightOn: false,
      pushed: false,
      timestamp: 'no timestamp yet'
    }
  }

  getData() {
    console.log('getting data');
    // search('sprint', 'Cloud - Sprint 59', function (data) {   document.getElementById('search-results').innerHTML = data; });
    // jiraConnector.search('sprint', 'Cloud - Sprint 59', data => { console.log('got data'); this.displayData(data) })
    //jiraConnector.search('status', 'In Development', data => { console.log('got data'); this.displayData(data) })
    // jiraConnector.getInDevelopment(59, this.displayData);
    jiraConnector.getSprint(338, this.displayData);
  }

  displayData(data) {
    console.log(data);
  }

  render() {
    const { pushed } = this.state;
    this.getData();
    return (
      <div className="App">
        <Header className="App-title" />
        <Body pushed={pushed} />
      </div>
    );
  }
}

const Body = (props) => {

  const message = props.pushed ? 'Working Hard' : 'Slacking Off (Hard)';

  return (
    <Grid divided='vertically'>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Segment className="App-segment">
            <Weather />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment className="App-segment App-title">
            {new Date().toLocaleString()}
        </Segment>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={2}>
        <Grid.Column>
          1
        </Grid.Column>
        <Grid.Column>
          2
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={2}>
        <Grid.Column>
          <StatusList title="Work from home" />
        </Grid.Column>
        <Grid.Column>
          <StatusList title="Out of office" />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={1}>
        <Grid.Column>
          <Messages message={message} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
};

export default App;
