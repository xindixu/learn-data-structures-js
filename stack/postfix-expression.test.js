import calculatePostfixExp from "./postfix-expression"

const case1 = ["4", "13", "5", "/", "+"] // (4 + (13 / 5)) = 6
const case2 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"] // ((10 * (6 / ((9 + 3) * -11))) + 17) + 5 =

test("correct result for all test cases", () => {
  expect(calculatePostfixExp(case1)).toEqual(6)
  expect(calculatePostfixExp(case2)).toEqual(12)
})
