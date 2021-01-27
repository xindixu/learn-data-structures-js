import printYangsTriangle from "./yangs-triangle"

test("correct result for all test cases", () => {
  expect(printYangsTriangle(8)).toEqual("1 7 21 35 35 21 7 1")
  expect(printYangsTriangle(10)).toEqual("1 9 36 84 126 126 84 36 9 1")
})
