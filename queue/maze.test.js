import solveMaze from "./maze"

test("correct result for all test cases", () => {
  expect(solveMaze()).toEqual(9)
})
