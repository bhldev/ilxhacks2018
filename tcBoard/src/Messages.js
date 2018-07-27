import * as React from 'react';
import { Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const Messages = (props) => {

  return (
    <div>
      <Header attached='top' className="App-title" style={{ backgroundColor: 'lightgray' }}>
        Messages
      </Header>
      {props.message}
    </div>
  );
}

export default Messages;