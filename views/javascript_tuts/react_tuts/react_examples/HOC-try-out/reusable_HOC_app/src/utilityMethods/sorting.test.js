import { sortASC, sortDESC } from "./sorting";

test("is sorting ASC", () => {
  const result = sortASC(["b", "c", 4, "a", 1]);
  expect(result).toEqual([1, 4, "a", "b", "c"]);
});

test("is sorting DESC", () => {
  const result = sortDESC(["b", "c", 4, "a", 1]);
  expect(result).toEqual(["c", "b", "a", 4, 1]);
});

test("numbers are sorted as first", () => {
  const result = sortASC(["b", "c", 4, "a", 1]);
  expect(result[0]).toEqual(expect.any(Number));
});

test("numbers are sorted as last", () => {
  const result = sortDESC(["b", "c", 4, "a", 1]);
  expect(result[result.length - 1]).toEqual(expect.any(Number));
});
