import * as React from 'react';
import { Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const Messages = (props) => {

  return (
    <div>
      <Header attached='top' className="App-title" style={{ backgroundColor: 'lightgray' }}>
        Messages
      </Header>
      <Header size='huge' color={props.message === 'Working Hard' ? 'green' : 'red'} className="App-title">{props.message}</Header>
    </div>
  );
}

export default Messages;