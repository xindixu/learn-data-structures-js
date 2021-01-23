import checkParenthesis from "./parenthesis"

const case1 = "sdf(ds(ew(we)rw)rwqq)qwewe" // correct
const case2 = "(sd(qwqw)sd(sd))" // correct
const case3 = "()()sd()(sd()fw))(" // error
const case4 = "()()sd()(sd()fw)(" // error

test("correct result for all test cases", () => {
  expect(checkParenthesis(case1)).toBeTruthy()
  expect(checkParenthesis(case2)).toBeTruthy()
  expect(checkParenthesis(case3)).toBeFalsy()
  expect(checkParenthesis(case4)).toBeFalsy()
})
