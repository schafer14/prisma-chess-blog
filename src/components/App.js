import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {firebase} from '../firebase'
import {withStyles} from '@material-ui/core/styles'

import HomePage from './HomePage'
import RegisterPage from './RegisterPage'
import LoginPage from './Login'
import PostPage from '../containers/Posts/Router'

import Nav from './Nav'
import Drawer from './Drawer'
import styles from '../constants/layoutstyles'

class App extends Component {
  state = {
    auth: null,
    drawerOpen: false,
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      this.setState({auth: authUser})
    })
  }

  openDrawer = () => {
    this.setState({drawerOpen: true})
  }

  closeDrawer = () => {
    this.setState({drawerOpen: false})
  }

  render() {
    const {classes} = this.props
    return (
      <Router>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <Nav auth={this.state.auth} openDrawer={this.openDrawer} />
            <Drawer
              onClose={this.closeDrawer}
              onOpen={this.openDrawer}
              isOpen={this.state.drawerOpen}
            />
            <main className={classes.content}>
              <div className={classes.drawerHeader} />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/posts" component={PostPage} />
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    )
  }
}

export default withStyles(styles, {withTheme: true})(App)
