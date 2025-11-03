// Create a class Product with name and price, and a method discountedPrice().
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  discountedPrice(discountPercent) {
    const discountAmount = (this.price * discountPercent) / 100;
    const finalPrice = this.price - discountAmount;
    return finalPrice;
  }

  displayInfo() {
    console.log(`Product Name: ${this.name}`);
    console.log(`Original Price: ₹${this.price}`);
  }
}

const product1 = new Product("Wireless Headphones", 3000);
product1.displayInfo();
console.log(`Price after 10% discount: ₹${product1.discountedPrice(10)}`);
