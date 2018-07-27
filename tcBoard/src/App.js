import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import Header from './Header.js';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

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
