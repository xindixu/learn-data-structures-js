class Queue {
  #items = []

  /** Add an item at the end of the queue
   * @param  {any} item
   */
  enqueue(item) {
    this.#items.push(item)
  }

  /** Remove the item at the head of the queue
   * @returns {any} Item being removed
   */
  dequeue() {
    return this.#items.shift()
  }

  /** Get the item at the head of the stack
   * @returns {any} Item at the head
   */
  head() {
    return this.#items[0]
  }

  /** Get the item at the end of the stack
   * @returns {any} Item at the end
   */
  tail() {
    return this.#items[this.#items.length - 1]
  }

  /** Check if the queue is empty
   * @returns {Boolean} Is queue empty
   */
  isEmpty() {
    return this.#items.length === 0
  }

  /** Get the size of the queue
   * @returns {Number} Number of items in the queue
   */
  size() {
    return this.#items.length
  }

  clear() {
    this.#items = []
  }

  print() {
    return this.#items
  }
}

export default Queue
