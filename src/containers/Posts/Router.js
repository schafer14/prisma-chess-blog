import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Create from './Create'

class PostPage extends Component {
  render() {
    return (
      <Switch>
        <Route path={`${this.props.match.path}/create`} component={Create} />
      </Switch>
    )
  }
}

export default PostPage
