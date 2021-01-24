import josephus from "./josephus-problem"

const array = [...new Array(50).keys()].map((x) => x + 1)

test("correct result for all test cases", () => {
  expect(josephus(array)).toEqual(11)
})
