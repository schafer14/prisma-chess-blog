import {forEach, lowerCase} from 'lodash'
import {King, Queen, Rook, Bishop, Knight, Pawn} from './board/pieces'

const PIECE_MAP = {
  k: King,
  q: Queen,
  r: Rook,
  b: Bishop,
  n: Knight,
  p: Pawn,
}

const FILE_MAP = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const fenPositionToPieceArray = fenPosition => {
  let rows = fenPosition.split('/')
  let pieces = []

  forEach(rows, (row, i) => {
    let rowNum = 8 - i
    let col = 0

    forEach(row.split(''), char => {
      let square = FILE_MAP[col] + rowNum
      if (/[a-z]/.test(char)) {
        pieces.push(new PIECE_MAP[char]('black', square))
        col++
      }

      if (/[A-Z]/.test(char)) {
        pieces.push(new PIECE_MAP[(lowerCase(char))]('white', square))
        col++
      }

      if (/[0-9]/.test(char)) {
        col += parseInt(char, 10)
      }
    })
  })

  return pieces
}

export {fenPositionToPieceArray}
