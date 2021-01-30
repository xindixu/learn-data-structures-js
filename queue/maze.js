/* eslint-disable no-loop-func */
/* eslint-disable max-classes-per-file */
import Queue from "./index"

const MAZE = [
  [0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
]

const start = [1, 2]
const end = [5, 3]

class Position {
  constructor(x, y, step) {
    this.x = x
    this.y = y
    this.step = step
  }
}

const MAZE_NODES = MAZE.map((row, j) => row.map((col, i) => new Position(i, j, 0)))

// Return an array of possible positions around the origin.
// Each position has x, y pos and steps to get there
const findPositions = (origin) => {
  // check if valid:
  // - out of index range
  // - 0 or 1
  // - marked?
  const validPositions = []
  const { x } = origin
  const { y } = origin
  const step = origin.step + 1

  const top = y - 1
  const down = y + 1
  const left = x - 1
  const right = x + 1

  // top
  if (top > -1 && MAZE[top][x] === 0 && MAZE_NODES[top][x].step === 0) {
    validPositions.push(new Position(x, top, step))
  }

  // down
  if (down < MAZE.length && MAZE[down][x] === 0 && MAZE_NODES[down][x].step === 0) {
    validPositions.push(new Position(x, down, step))
  }

  // left
  if (left > -1 && MAZE[y][left] === 0 && MAZE_NODES[y][left].step === 0) {
    validPositions.push(new Position(left, y, step))
  }

  // right
  if (right < MAZE[0].length && MAZE[y][right] === 0 && MAZE_NODES[y][right].step === 0) {
    validPositions.push(new Position(right, y, step))
  }

  // array of Positions
  return validPositions
}

const print = (mazeNodes) => {
  const maze = mazeNodes.map((row, j) => row.map((col, i) => col.step))
  return maze.map((x) => x.join(" "))
}

const solveMaze = () => {
  const startPosition = new Position(...start, 0)
  const endPosition = new Position(...end)

  const queue = new Queue()
  queue.enqueue(startPosition, 0)

  let maxStep = 0

  // Mark as something different than 0, so that we don't count the start position as a step
  MAZE_NODES[startPosition.y][startPosition.x].step = -1

  while (true) {
    const origin = queue.dequeue()

    // q = [t, b, l, r, 0, tt, tb, tl, tr, 0]
    // find positions
    const positions = findPositions(origin)

    const arrived = positions.some((p) => {
      queue.enqueue(p)
      // mark array:
      const { x, y } = p
      MAZE_NODES[y][x].step = origin.step + 1

      // reached end position
      if (x === endPosition.x && y === endPosition.y) {
        maxStep = origin.step + 1
        return true
      }
      return false
    })

    if (arrived) {
      break
    }

    // Can't find a path
    if (queue.isEmpty()) {
      break
    }
  }

  console.log("array", print(MAZE_NODES))
  return maxStep
}

export default solveMaze
