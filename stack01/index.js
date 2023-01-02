class stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }
}

let cars = new stack();
cars.push("honda");
cars.push("mazda");
cars.push("toyota");
console.log("🚀 cars-push : ", cars);
console.log("🚀 cars-pop:", cars.pop());

console.log("🚀 cars-list: ", cars);
console.log("🚀 cars-list: ", cars.peek());
console.log("🚀 cars-size: ", cars.size());
