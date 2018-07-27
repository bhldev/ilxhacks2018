import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


const CloudHeader = () => (
  <Header as='h2' color="blue">
    <Icon circular name='cloud' />
    Team Cloud
  </Header>
)

export default CloudHeader
