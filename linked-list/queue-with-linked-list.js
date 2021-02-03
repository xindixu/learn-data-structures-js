import LinkedList from "./index"

class Queue {
  #linkedList = new LinkedList()

  enqueue(item) {
    this.#linkedList.append(item)
  }

  dequeue() {
    return this.#linkedList.removeHead()
  }

  head() {
    return this.#linkedList.head()
  }

  tail() {
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
