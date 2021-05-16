const { maximumWealth } = require("./ArrayRichestCustomerWealth");

describe("maximumWealth", () => {
  test("should return 6 accounts", () => {
    const accounts = [
      [1, 2, 3],
      [3, 2, 1],
    ];
    expect(maximumWealth(accounts)).toBe(6);
  });

  test("should return 10 accounts", () => {
    const accounts = [
      [1, 5],
      [7, 3],
      [3, 5],
    ];
    expect(maximumWealth(accounts)).toBe(10);
  });

  test("should return 13 accounts", () => {
    const accounts = [
      [5, 5],
      [2, 3],
      [8, 5],
    ];
    expect(maximumWealth(accounts)).toBe(13);
  });

  test("can not be empty ", () => {
    expect(maximumWealth([])).not.toBe([]);
  });
});
