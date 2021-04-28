class ProductOfNumbers {
  constructor() {
    this.list = [];
  }

  add(num) {
    this.list.push(num);
  }
  getProduct(k) {
    return this.list
      .slice(this.list.length - k, this.list.length)
      .reduce((prev, curr) => (curr *= prev));
  }
}
