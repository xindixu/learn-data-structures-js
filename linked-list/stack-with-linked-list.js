import LinkedList from "./index"

class Stack {
  #linkedList = new LinkedList()

  push(item) {
    this.#linkedList.append(item)
  }

  pop() {
    return this.#linkedList.removeTail()
  }

  top() {
    return this.#linkedList.tail()
  }

  size() {
    return this.#linkedList.size()
  }

  isEmpty() {
    return this.#linkedList.isEmpty()
  }

  clear() {
    return this.#linkedList.clear()
  }
}
