const sum = require("./index");

test("should return sum of two number", () => {
  expect(sum(1, 2)).toBe(3);
});
