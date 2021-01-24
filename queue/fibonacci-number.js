import Queue from "./index"

// 1 1 2 3 5

// i = 1: 1 1
// i = 2: 1 2
// i = 3: 2 3
// i = 4: 3 5
const solveFibonacci = (n) => {
  const queue = new Queue()
  queue.enqueue(1)
  queue.enqueue(1)

  for (let i = 1; i < n; i += 1) {
    // n - 2
    const first = queue.dequeue()
    // n - 1
    const second = queue.head()

    queue.enqueue(first + second)
  }

  queue.dequeue()
  return queue.dequeue()
}

export default solveFibonacci
