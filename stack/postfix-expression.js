import Stack from "./index"

const calculatePostfixExp = (exp) => {
  const OPERATORS = ["+", "-", "*", "/"]
  const stack = new Stack()

  exp.forEach((i) => {
    if (OPERATORS.includes(i)) {
      const right = stack.pop()
      const left = stack.pop()

      const calculate = () => {
        switch (i) {
          case "+":
            return left + right
          case "-":
            return left - right
          case "*":
            return left * right
          case "/":
            return Math.floor(left / right)
          default:
            return null
        }
      }

      const result = calculate()
      return stack.push(result)
    }

    return stack.push(parseInt(i, 10))
  })

  return parseInt(stack.top(), 10)
}

export default calculatePostfixExp
