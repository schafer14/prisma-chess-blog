import React from 'react'

import {Query} from 'react-apollo'
import {gql} from 'apollo-boost'

import {withStyles} from '@material-ui/core/styles'
import {CircularProgress} from '@material-ui/core'

const styles = {}

export const TIME_CONTROL_QUERY = gql`
  query TimeControls {
    timeControls {
      id
      base
      increment
    }
  }
`

const home = ({classes}) => {
  return (
    <Query query={TIME_CONTROL_QUERY}>
      {({data, loading, error}) => {
        if (loading) {
          return <CircularProgress className={classes.progress} />
        }

        return <pre>{JSON.stringify(data, null, 4)} </pre>
      }}
    </Query>
  )
}

export default withStyles(styles)(home)
