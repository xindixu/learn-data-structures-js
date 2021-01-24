import Stack from "./index"

class MinStack {
  #dataStack = new Stack()

  #minStack = new Stack()

  push(item) {
    this.#dataStack.push(item)

    const min = this.#minStack.top() || Number.MAX_SAFE_INTEGER
    if (item <= min) {
      this.#minStack.push(item)
    }
  }

  pop() {
    const item = this.#dataStack.pop()
    if (item === this.#minStack.top()) {
      this.#minStack.pop()
    }
    return item
  }

  min() {
    return this.#minStack.top()
  }
}

export default MinStack
