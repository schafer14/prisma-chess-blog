import React from 'react'

import _, { curry } from 'lodash'

import whiteKing from './pieces/white-king.svg'
import whiteQueen from './pieces/white-queen.svg'
import whiteRook from './pieces/white-rook.svg'
import whiteBishop from './pieces/white-bishop.svg'
import whiteKnight from './pieces/white-knight.svg'
import whitePawn from './pieces/white-pawn.svg'

import blackKing from './pieces/black-king.svg'
import blackQueen from './pieces/black-queen.svg'
import blackRook from './pieces/black-rook.svg'
import blackBishop from './pieces/black-bishop.svg'
import blackKnight from './pieces/black-knight.svg'
import blackPawn from './pieces/black-pawn.svg'

const FILE_MAP = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const PIECE_MAP = {
  black: {
    king: blackKing,
    queen: blackQueen,
    rook: blackRook,
    bishop: blackBishop,
    knight: blackKnight,
    pawn: blackPawn,
  },
  white: {
    king: whiteKing,
    queen: whiteQueen,
    rook: whiteRook,
    bishop: whiteBishop,
    knight: whiteKnight,
    pawn: whitePawn,
  },
}

class Piece {
  constructor(color, square, type) {
    this.color = color
    this.square = square
    this.type = type
  }

  squareToCoords(rotated) {
    if (rotated) {
      return {
        x: 70 - 10 * FILE_MAP.indexOf(this.square[0]),
        y: this.square[1] * 10 - 10,
      }
    }
    return {
      x: 10 * FILE_MAP.indexOf(this.square[0]),
      y: 80 - this.square[1] * 10,
    }
  }

  getEle(rotated) {
    return {
      ...this.squareToCoords(rotated),
      width: 10,
      height: 10,
      href: PIECE_MAP[this.color][this.type],
    }
  }

  render(rotated) {
    return <image {...this.getEle(rotated)} />
  }
}

const King = curry(Piece)(_, _, 'king')
const Queen = curry(Piece)(_, _, 'queen')
const Rook = curry(Piece)(_, _, 'rook')
const Bishop = curry(Piece)(_, _, 'bishop')
const Knight = curry(Piece)(_, _, 'knight')
const Pawn = curry(Piece)(_, _, 'pawn')

export default Piece

export { King, Queen, Rook, Bishop, Knight, Pawn }
