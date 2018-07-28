import React, { Component } from 'react';
import { Grid, Segment, Label } from 'semantic-ui-react'
import Header from './Header';
import Weather from './Weather';
import Messages from './Messages';
import StatusList from './StatusList';
import Chart from './Chart';
import './App.css';
import { subscribeToPush, subscribeToJiraConnector, jiraConnector, weatherConnector, subscribeToWeatherConnector } from './api';
//import Iframe from 'react-iframe';
import { timingSafeEqual } from 'crypto';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {

  constructor() {
    super();
    subscribeToJiraConnector();
    // subscribeToWeatherConnector();
    subscribeToPush(state => {
      this.setState({
        pushed: state
      })
    })
    this.state = {
      time: new Date().toLocaleString(),
      lightOn: false,
      pushed: false,
      timestamp: 'no timestamp yet',
      data: {},
      todo: [],
      inProgress: [],
      done: [],
      weather: null,
    }
  }

  componentDidMount = () => {
    this.getData();
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  getData = () => {
    console.log('getting data');
    // search('sprint', 'Cloud - Sprint 59', function (data) {   document.getElementById('search-results').innerHTML = data; });
    // jiraConnector.search('sprint', 'Cloud - Sprint 59', data => { console.log('got data'); this.displayData(data) })
    //jiraConnector.search('status', 'In Development', data => { console.log('got data'); this.displayData(data) })
    // weatherConnector.getDailyForecast(this.setWeather);
    jiraConnector.getNew(59, this.addToDo);
    jiraConnector.getReadyForDevelopment(59, this.addToDo);
    jiraConnector.getInDevelopment(59, this.addInProgress);
    jiraConnector.getNeedsCodeReview(59, this.addInProgress);
    jiraConnector.getReadyForTesting(59, this.addInProgress);
    jiraConnector.inTesting(59, this.addToDo);
    jiraConnector.getReadyForReview(59, this.addInProgress);
    jiraConnector.getDone(59, this.addDone);

    // jiraConnector.getSprint(338, this.setIssueProgress);
  }

  addToDo = (data) => {
    if (!!data && data.data && data.data.issues) {
      this.setState({
        todo: this.state.todo.concat(data.data.issues)
      });
    }
  }

  addDone = (data) => {
    if (!!data && data.data && data.data.issues) {
      this.setState({
        inProgress: this.state.inProgress.concat(data.data.issues)
      });
    }
  }

  addInProgress = (data) => {
    if (!!data && data.data && data.data.issues) {
      this.setState({
        done: this.state.done.concat(data.data.issues)
      });
    }
  }

  setWeather = (data) => {
    if (!!data && data.data) {
      this.setState({ weather: data.data });
    }
  }

  render() {
    return (
      <div className="App">
        <Header className="App-title" />
        <Body data={this.state} pushed={this.state.pushed}/>
      </div>
    );
  }
}

const Body = (props) => {
  const time = props.data.time;
  const message = props.pushed ? 'Working Hard' : 'Slacking Off (Hard)';
  const inProgress = props.data && props.data.inProgress;
  const done = props.data && props.data.done;
  const todo = props.data && props.data.todo;
  const weather = props.data && props.data.weather;

  return (
    <Grid divided='vertically'>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Segment className="App-segment">
            <Weather weatherData={weather} />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
         <Label as="a" className="App-title" size="large" basic > 
            {time}
         </Label> 
        </Segment>
        </Grid.Column>
      </Grid.Row>
      <Chart
        todo={todo}
        inProgress={inProgress}
        done={done}
      />
      <Grid.Row columns={2}>
        <Grid.Column>
          <StatusList title="Work from home" datset="wfh" />
        </Grid.Column>
        <Grid.Column>
          <StatusList title="Out of office" datset="ooo" />
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
