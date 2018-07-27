import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer, subscribeToLed, subscribeToPush } from './api';
import Iframe from 'react-iframe';

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
const iframe = '<iframe src="www.google.com" width="540" height="450"></iframe>'; 


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Team Cloud Dashboard</h1>
        </header>
        <div>
        <Iframe url="http://www.youtube.com/"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
       />
       
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
