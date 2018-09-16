import { filter, chain, trim, split, map } from 'lodash'

const splitMoves = moveText => {
  let moves = chain(moveText)
    .split(/\d+\.\s.*?/)
    .filter()
    .map(trim)
    .map(move => split(move, ' '))
    .value()

  return {
    white: map(moves, move => move[0]),
    black: map(moves, move => move[1]),
  }
}

const splitPgn = pgn => {
  let lines = filter(pgn.split('\n'))

  let keyValues = filter(lines, line => /\[.*\]/.test(line))
  let moveText = filter(lines, line => !/\[.*\]/.test(line))[0]

  return { keyValues, moveText }
}

export { splitPgn, splitMoves }
