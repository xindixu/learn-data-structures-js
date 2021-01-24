import Stack from "./stack-with-queue"

test("correct result for all test cases", () => {
  const stack = new Stack()

  stack.push(1)
  expect(stack.top()).toEqual(1)

  stack.push(2)
  stack.push(3)
  expect(stack.pop()).toEqual(3)

  expect(stack.top()).toEqual(2)

  stack.push(4)
  expect(stack.pop()).toEqual(4)
})
