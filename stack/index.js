class Stack {
  // Private property
  #items = []

  /** Add an item to the top of the stack
   * @param {any} item
   */
  push(item) {
    this.#items.push(item)
  }

  /** Remove the item at the top of the stack
   * @returns {any} Item being removed
   */
  pop() {
    return this.#items.pop()
  }

  /** Return the item at the top of the stack
   * @returns {any} Item at the top
   */
  peek() {
    return this.#items[this.#items.length - 1]
  }

  /** Check if the stack is empty
   * @returns {Boolean} Is stack empty
   */
  isEmpty() {
    return this.#items.length === 0
  }

  /** Get the size of the stack
   * @returns {Number} Number of items in the stack
   */
  size() {
    return this.#items.length
  }

  clear() {
    this.#items = []
  }
}

// Examples:
const s = new Stack()
s.push(1)
s.pop()

export default Stack
