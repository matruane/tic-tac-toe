import { indexOf } from 'ramda'

export default function getPlayer (squares, moves = []) {
  const move = indexOf(squares, moves)

  if (move < 0) {
    return undefined
  }

  return move % 2 === 0 ? 'x' : 'o'
}
