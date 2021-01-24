import Stack from "./index"

const infixToPostfix = (array) => {
  const OPERATORS = { "+": 1, "-": 1, "*": 2, "/": 2 }
  const op = new Stack()
  const result = []

  array.forEach((i) => {
    if (i === "(") {
      op.push(i)
      return
    }

    if (i === ")") {
      // Add everything until (
      while (op.top() !== "(") {
        result.push(op.pop())
      }
      // Remove (
      op.pop()
      return
    }

    if (Object.keys(OPERATORS).includes(i)) {
      /*

      Compare:
    
      1 * 2 + 3 -> 1 2 * 3 +
      1 + 2 * 3 -> 1 2 3 * + 

      */

      // Since we want to process operators with higher priority first, need to pop those out first
      // Add all operators that has higher priority than current operator
      while (
        !op.isEmpty() &&
        Object.keys(OPERATORS).includes(op.top()) &&
        OPERATORS[op.top()] >= OPERATORS[i]
      ) {
        result.push(op.pop())
      }
      // Add current operator to stack
      op.push(i)
      return
    }

    // numbers
    result.push(i)
  })

  while (!op.isEmpty()) {
    result.push(op.pop())
  }

  return result
}

export default infixToPostfix
