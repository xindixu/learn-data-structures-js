import MinStack from "./min-stack"

// Examples
const list = [5, 6, 2, 4, 2, 7, 9]
const min = [5, 5, 2, 2, 2, 2, 2]
const reverseMin = [2, 2, 2, 2, 2, 5, 5]

test("correct when pushing items", () => {
  const stack = new MinStack()

  list.forEach((l, index) => {
    stack.push(l)
    expect(stack.min()).toEqual(min[index])
  })
})

test("correct when popping items", () => {
  const stack = new MinStack()

  list.forEach((l) => {
    stack.push(l)
  })
  list.forEach((l, index) => {
    expect(stack.min()).toEqual(reverseMin[index])
    stack.pop(l)
  })
})
