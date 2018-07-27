import * as React from 'react';
import { Segment, Header, List, Image } from 'semantic-ui-react'
import { teamMembers } from './constants';
import { wfh } from './constants';
import { ooo } from './constants';
import './App.css';

const StatusList = (props) => {
  const {
    title,
    datset,
  } = props;
  return (
    <div>
      <Header attached='top' className="App-title" style={{ backgroundColor: 'lightgray' }}>
        {title}
      </Header>
      <Segment attached >
        <List>
          {(datset === "wfh" ? wfh : ooo).map(member => {
            return (
              <List.Item style={{ paddingLeft: '1rem' }}>
                <Image avatar src={member.image} />
                <List.Content>
                  <List.Header>{member.name}</List.Header>
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      </Segment>
    </div>
  );
}

export default StatusList;
