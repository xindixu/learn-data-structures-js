import Queue from "./index"

const printYangsTriangle = (n) => {
  const SEPARATOR = 0
  const queue = new Queue()

  const firstRow = [1]
  const secondRow = [1, 1]

  if (n === 1) {
    return firstRow.join(" ")
  }

  if (n === 2) {
    return secondRow.join(" ")
  }

  secondRow.forEach((i) => {
    queue.enqueue(i)
  })
  queue.enqueue(SEPARATOR)

  queue.print()

  for (let i = 3; i <= n; i += 1) {
    queue.enqueue(1)
    while (queue.head() !== SEPARATOR) {
      const first = queue.dequeue()
      const second = queue.head()
      queue.enqueue(first + second)
    }
    // Remove SEPARATOR for last line
    queue.dequeue()
    // Add SEPARATOR for this line
    queue.enqueue(SEPARATOR)
  }

  return queue
    .print()
    .slice(0, queue.size() - 1)
    .join(" ")
}

export default printYangsTriangle
