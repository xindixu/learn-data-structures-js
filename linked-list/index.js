class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  length = 0

  head = null

  tail = null

  /** Create a node for data and append it to the linked list
   * @param  {any} data
   */
  append(data) {
    const node = new Node(data)
    if (!this.head && !this.tail) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length += 1
    return true
  }

  /** Get the node at given index
   * @param  {Number} index
   * @returns {Node}
   */
  getNode(index) {
    if (index < 0 || index > this.length) {
      return null
    }

    let currentNode = this.head
    let currentNodeIndex = 0
    while (currentNodeIndex < index) {
      currentNode = currentNode.next
      currentNodeIndex += 1
    }
    return currentNode
  }

  /** Get the data of the node at given index
   * @param  {Number} index
   * @returns {any}
   */
  get(index) {
    const node = this.getNode(index)
    return node ? node.data : null
  }

  /** Insert a new node with data at the given index to the linked list
   * @param  {any} data
   * @param  {Number} index
   */
  insert(data, index) {
    // Index out of range
    if (index < 0 || index > this.length) {
      return false
    }

    // Insert at the end
    if (index === this.length) {
      return this.append(data)
    }

    const node = new Node(data)
    // Insert at head
    if (index === 0) {
      node.next = this.head
      this.head = node
    } else {
      // Insert in the middle
      const previousNode = this.getNode(index - 1)
      node.next = previousNode.next
      previousNode.next = node
    }

    this.length += 1
    return true
  }

  /** Remove the node at given index
   * @param  {Number} index
   * @returns {any} Node data
   */
  remove(index) {
    // Index out of range
    if (index < 0 || index > this.length - 1) {
      return false
    }

    let deleteNode = null

    // Remove head
    if (index === 0) {
      deleteNode = this.head
      this.head = this.head.next
      // There were only one Node before removing
      if (!this.head) {
        this.tail = null
      }
    } else {
      const previousNode = this.getNode(index - 1)
      deleteNode = previousNode.next
      previousNode.next = previousNode.next.next

      // Remove tail
      if (deleteNode.next === null) {
        this.tail = previousNode
      }
    }

    deleteNode.next = null
    this.length -= 1

    return deleteNode.data
  }

  /** Return the index of the first Node whose data equals the given data; Returns -1 if not found
   * @param  {} data
   */
  indexOf(data) {
    let currentNode = this.head
    let currentNodeIndex = 0
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNodeIndex
      }
      currentNode = currentNode.next
      currentNodeIndex += 1
    }
    return -1
  }

  /** Convert the linked list to an array
   * @returns {[Nodes]} array
   */
  print() {
    let currentNode = this.head
    const result = []
    while (currentNode) {
      result.push(currentNode)
      currentNode = currentNode.next
    }
    return result
  }

  /** Check if the linked list is empty
   * @returns {Boolean}
   */
  isEmpty() {
    return this.length === 0
  }

  clear() {
    let currentNode = this.head
    let nextNode = currentNode.next
    while (nextNode) {
      nextNode = currentNode.next
      currentNode.next = null
      currentNode = nextNode
    }
    this.head = null
    this.tail = null
    this.length = 0
  }

  /** Get the head of the links list
   * @returns {Node} Head
   */
  head() {
    return this.head
  }

  /** Get the tail of the links list
   * @returns {Node} Tail
   */
  tail() {
    return this.tail
  }
}

export default LinkedList
