const { countNegatives } = require("./CountNegativeNumbersinaSortedMatrix");

describe("kWeakestRows", () => {
  test("should return 8", () => {
    const grid = [
      [4, 3, 2, -1],
      [3, 2, 1, -1],
      [1, 1, -1, -2],
      [-1, -1, -2, -3],
    ];
    expect(countNegatives(grid)).toBe(8);
  });

  test("should return 0", () => {
    const grid = [
      [3, 2],
      [1, 0],
    ];
    expect(countNegatives(grid)).toBe(0);
  });

  test("should return 3", () => {
    const grid = [
      [1, -1],
      [-1, -1],
    ];
    expect(countNegatives(grid)).toBe(3);
  });

  test("should return 1", () => {
    const grid = [[-1]];
    expect(countNegatives(grid)).toBe(1);
  });

  test("can not be empty ", () => {
    expect(countNegatives([])).not.toBe([]);
  });
});
