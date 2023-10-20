class Product {
  constructor(name, cost, acceptingOrders, quantity, description) {
    this.name = name;
    this.cost = cost;
    this.acceptingOrders = acceptingOrders;
    this.quantity = quantity;
    this.description = description;
  }
  stockCost() {
    return this.cost * this.quantity;
  }
  getDesc() {
    return this.description;
  }
}

export default Product;
