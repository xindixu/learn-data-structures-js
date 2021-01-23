import Stack from "./index"

const checkParenthesis = (str) => {
  const stack = new Stack()
  const isValid = str.split("").every((char) => {
    if (char === "(") {
      stack.push(char)
    }
    if (char === ")" && stack.pop() !== "(") {
      return false
    }
    return true
  })

  return isValid && stack.isEmpty()
}

export default checkParenthesis
