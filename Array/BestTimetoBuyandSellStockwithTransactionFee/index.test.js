const { maxProfit } = require("./BestTimetoBuyandSellStockwithTransactionFee");

describe("kWeakestRows", () => {
  test("should return 8", () => {
    const prices = [1, 3, 2, 8, 4, 9],
      fee = 2;

    expect(maxProfit(prices, fee)).toBe(8);
  });

  test("should return 4", () => {
    const prices = [1, 3, 2, 8, 4, 9],
      fee = 4;
    expect(maxProfit(prices, fee)).toBe(4);
  });

  test("should return 4", () => {
    const prices = [3, 3, 8, 2, 7, 9],
      fee = 4;
    expect(maxProfit(prices, fee)).toBe(4);
  });

  test("can not be empty ", () => {
    expect(maxProfit([], 0)).not.toBe([]);
  });
});
