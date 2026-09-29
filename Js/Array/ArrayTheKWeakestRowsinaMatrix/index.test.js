const { kWeakestRows } = require("./ArrayTheKWeakestRowsinaMatrix");

describe("kWeakestRows", () => {
  test("should return [0, 2]", () => {
    const mat = [
        [1, 0, 0, 0],
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
      ],
      k = 2;

    expect(kWeakestRows(mat, k)).toEqual([0, 2]);
  });

  test("should return [2,0,3]", () => {
    const mat = [
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1],
      ],
      k = 3;

    expect(kWeakestRows(mat, k)).toEqual([2, 0, 3]);
  });

  test("can not be empty ", () => {
    expect(kWeakestRows([], 0)).not.toBe([]);
  });
});
