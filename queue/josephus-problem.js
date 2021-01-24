import Queue from "./index"

const josephus = (array) => {
  const queue = new Queue()

  array.forEach((el) => {
    queue.enqueue(el)
  })

  let order = 0
  while (queue.size() > 1) {
    const item = queue.dequeue()
    // Delete every 1 in 3

    if (order < 2) {
      queue.enqueue(item)
      order += 1
    } else {
      order = 0
    }
  }
  return queue.dequeue()
}

export default josephus
