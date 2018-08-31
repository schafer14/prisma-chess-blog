import React from 'react'

import {
  SwipeableDrawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import StarIcon from '@material-ui/icons/Star'

const styles = {
  drawerHeader: {
    display: 'flex',
    width: 300,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
  },
}

const drawer = ({onClose, onOpen, isOpen, classes}) => {
  return (
    <SwipeableDrawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      onOpen={onOpen}
      onClose={onClose}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
    </SwipeableDrawer>
  )
}

export default withStyles(styles)(drawer)
