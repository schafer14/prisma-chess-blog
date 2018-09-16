import React, {Component, Fragment} from 'react'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import {times, map} from 'lodash'
import {fenPositionToPieceArray} from '../fenUtils'
import update from 'immutability-helper'

class Board extends Component {
  state = {
    highlights: {},
  }

  componentWillMount() {
    let fen =
      this.props.fen === 'startpos'
        ? 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
        : this.props.fen

    let fenParts = fen.split(' ')

    this.setState({
      positionFen: fenPositionToPieceArray(fenParts[0]),
      turn: fenParts[1],
      castleRights: fenParts[2],
      enPassent: fenParts[3],
      halfmoveClock: fenParts[4],
      fullmoveClock: fenParts[5],
    })
  }

  actionStart = squareNumber => () => {
    this.setState(update(this.state, {highlights: {$toggle: [squareNumber]}}))
  }

  render() {
    return (
      <div style={{widith: '100%'}}>
        <svg
          version="1.1"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 80 80">
          <defs>
            <radialGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: 'black', stopOpacity: 0}} />
              <stop
                offset="100%"
                style={{stopColor: 'black', stopOpacity: 0.2}}
              />
            </radialGradient>
          </defs>

          {times(8, i => {
            return times(8, j => {
              const squareNumber = 8 * i + j
              let highlight = this.state.highlights[squareNumber] ? (
                <rect
                  x={i * 10}
                  y={j * 10}
                  height="10"
                  width="10"
                  fill="rgba(0,0,0,0.5)"
                  style={{pointerEvents: 'none'}}
                />
              ) : null
              return (
                <Fragment key={squareNumber}>
                  <rect
                    onClick={this.actionStart(squareNumber)}
                    key={'' + i + j}
                    x={i * 10}
                    y={j * 10}
                    height="10"
                    width="10"
                    fill={(i + j) % 2 === 0 ? 'white' : '#3f51b5'}
                  />
                  {highlight}
                </Fragment>
              )
            })
          })}

          {map(this.state.positionFen, (piece, index) => {
            return (
              <g style={{pointerEvents: 'none'}} key={index}>
                {piece.render(this.props.rotated)}
              </g>
            )
          })}

          <rect
            style={{pointerEvents: 'none'}}
            x="0"
            y="0"
            width="80"
            height="80"
            fill="url(#grad1)"
          />
        </svg>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Board)
