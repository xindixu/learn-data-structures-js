import Queue from "./index"

class Stack {
  #queueA = new Queue()

  #queueB = new Queue()

  current = this.#queueA

  other = this.#queueB

  push(item) {
    this.current.enqueue(item)
  }

  pop() {
    while (this.current.size() > 1) {
      this.other.enqueue(this.current.dequeue())
    }

    const result = this.current.dequeue()

    ;[this.current, this.other] = [this.other, this.current]
    return result
  }

  top() {
    const result = this.pop()
    this.current.enqueue(result)
    return result
  }

  /** Check if the stack is empty
   * @returns {Boolean} Is stack empty
   */
  isEmpty() {
    return this.current.isEmpty()
  }

  /** Get the size of the stack
   * @returns {Number} Number of items in the stack
   */
  size() {
    return this.current.size()
  }

  clear() {
    this.#queueA.clear()
    this.#queueB.clear()
  }
}

export default Stack
