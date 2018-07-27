import * as React from 'react';
import { Segment, Label, Divider, Grid, Header } from 'semantic-ui-react';
import { mockResponse } from './mock.js';

const JiraCard = (props) => {
  const {
    issueType,
    issueId,
    assignee,
    summary
  } = props;

  const show = issueType !== 'Sub-task';
  return show && (
    <Segment>
    <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Label size="large">{issueId}</Label>
          </Grid.Column>
          <Grid.Column style={{ textAlign: 'right' }}>
            <Label
              size="large"
              color={(issueType === 'Story') ? 'green' : 'red'}
            >
              {issueType}
            </Label>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
      <Header as="h5">{summary}</Header>
      {assignee}
    </Segment>
  );
}

export default JiraCard;