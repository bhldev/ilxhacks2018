import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer, subscribeToLed, subscribeToPush, subscribeToJiraConnector, jiraConnector } from './api';
import Iframe from 'react-iframe';
import { timingSafeEqual } from 'crypto';


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
//    const bcolor = this.state.lightOn ? 'blue': 'red';
const bgLed = this.state.lightOn ? {background:'green'} : {background:'red'};
const bgPush = this.state.pushed ? {background:'orange'} : {background:'gray'};
//const bg = {background:'red'};
this.getData();


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Team Cloud Dashboard</h1>
        </header>
        <div>
    </div>
        {/* <button style={{...bgLed, width: '70px', height:'50px', color:'white'}}>LED</button>
        <button style={{...bgPush, width: '70px', height:'50px', color:'blue'}}>PUSH</button>
        <p>{window.location.hostname}</p>
        <p className="App-intro">
        This is the timer value: {this.state.timestamp}
        </p> */}

      </div>
    );
  }
}

export default App;
