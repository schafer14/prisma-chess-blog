import React, {Component} from 'react'

import {firebase} from '../firebase'
import {Link} from 'react-router-dom'

import {withStyles} from '@material-ui/core/styles'
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'

const styles = {
  root: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    color: 'inherit !important',
    textDecoration: 'none !important',
  },
}

class Nav extends Component {
  state = {
    anchorEl: null,
  }

  handleMenu = event => {
    this.setState({anchorEl: event.currentTarget})
  }

  handleClose = () => {
    this.setState({anchorEl: null})
  }

  signOut = () => {
    firebase.auth.signOut()
  }

  render() {
    const open = Boolean(this.state.anchorEl)
    return (
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <IconButton
            className={this.props.classes.menuButton}
            color="inherit"
            onClick={this.props.openDrawer}
            aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <div className={this.props.classes.flex}>
            <Link to="/" className={this.props.classes.link}>
              <Typography variant="title" color="inherit">
                ChessX
              </Typography>
            </Link>
          </div>
          {!this.props.auth && (
            <Link to="/login" className={this.props.classes.link}>
              <Button color="inherit">Log In</Button>
            </Link>
          )}

          {this.props.auth && (
            <div>
              <IconButton
                aria-haspopup="true"
                color="inherit"
                onClick={this.handleMenu}
                aria-owns={open ? 'menu-appbar' : null}>
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                open={open}
                anchorEl={this.state.anchorEl}
                onClose={this.handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}>
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.signOut}>Sign Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Nav)
