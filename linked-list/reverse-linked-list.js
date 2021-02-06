class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

const print = (node) => {
  let curNode = node
  while (curNode) {
    console.log(curNode.data)
    curNode = curNode.next
  }
}

const reverseRecursion = (head) => {
  if (!head) {
    return null
  }

  // tail
  // When at the tail, return itself since there's nothing to reverse
  // After reverse, the old tail will become the new head
  if (!head.next) {
    return head
  }

  const reversedHead = reverseRecursion(head.next)
  head.next.next = head
  head.next = null

  return reversedHead
}

const reverseIteration = (head) => {
  let cur = head
  let next
  let prev = null

  while (cur) {
    next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }

  return prev
}

const reverseList = (head) => reverseRecursion(head)
