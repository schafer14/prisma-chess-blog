import React, {Component} from 'react'

import {map} from 'lodash'
import {splitPgn, splitMoves} from '../pgnUtils'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

class Board extends Component {
  componentWillMount() {
    let pgn = this.props.pgn || ''

    let pgnParts = splitPgn(pgn)
    let moveParts = splitMoves(pgnParts.moveText)

    this.setState({
      moves: pgnParts.moveText,
      whiteMoves: moveParts.white,
      blackMoves: moveParts.black,
    })
  }

  render() {
    const {classes} = this.props
    const {whiteMoves, blackMoves} = this.state

    return (
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Move</TableCell>
              <TableCell>Banner Schafer</TableCell>
              <TableCell>Kathleen</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {map(this.state.whiteMoves, (_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{whiteMoves[i]}</TableCell>
                  <TableCell>{blackMoves[i]}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(Board)
