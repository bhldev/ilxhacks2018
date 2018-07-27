import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer, subscribeToLed, subscribeToPush } from './api';
import { Grid, Image } from 'semantic-ui-react'
import Header from './Header.js';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }));
    subscribeToLed((state) => this.setState({
      lightOn:state
    }));
    subscribeToPush((state) => this.setState({
      pushed:state
    }));
  }
  state = {
    lightOn: false,
    pushed: false,
    timestamp: 'no timestamp yet'
  };

  render() {
//    const bcolor = this.state.lightOn ? 'blue': 'red';
const bgLed = this.state.lightOn ? {background:'green'} : {background:'red'};
const bgPush = this.state.pushed ? {background:'orange'} : {background:'gray'};
//const bg = {background:'red'};

    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;


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


