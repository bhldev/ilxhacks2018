import * as React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { mockResponse } from './mock';
import JiraCard from './JiraCard';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

const Chart = (props) => {

  const {
    todo,
    inProgress,
    done,
  } = props;

  if (!todo || !inProgress || !done) {
    return null;
  }

  const todoColumn = getIssueColumn(todo);
  const inProgressColumn = getIssueColumn(inProgress);
  const doneColumn = getIssueColumn(done);

  return (
      <Grid.Row columns={3}>
        <Grid.Column>
          <Header className="App-title">To Do</Header>
          {todoColumn}
        </Grid.Column>
        <Grid.Column>
          <Header className="App-title">In Progress</Header>
          {inProgressColumn}
        </Grid.Column>
        <Grid.Column>
          <Header className="App-title">Done</Header>
          {doneColumn}
        </Grid.Column>
      </Grid.Row>
  );
}

const getIssueColumn = (issueList) => {
  return (issueList && issueList.map(issue => {
    const id = issue.key;
    const type = issue.fields && issue.fields.issuetype && issue.fields.issuetype.name;
    const assignee = issue.fields && issue.fields && issue.fields.assignee && issue.fields.assignee.displayName;
    const summary = issue.fields && issue.fields.summary;
      return (
        <JiraCard
          issueId={id}
          issueType={type}
          assignee={assignee}
          summary={summary}
        />
      );
    })
  )
}

export default Chart;