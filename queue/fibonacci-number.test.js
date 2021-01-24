import solveFibonacci from "./fibonacci-number"

test("correct result for all test cases", () => {
  expect(solveFibonacci(10)).toEqual(89)
  expect(solveFibonacci(14)).toEqual(610)
})
