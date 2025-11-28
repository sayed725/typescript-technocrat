// static 

// static keyword use korle class er sathe direct access kora jay. object create na koreo access kora jay
// static property and method use kora jay
// static er moddhe this keyword use kora jay na
// static member access korar jonno class name use korte hoy

class Counter {
  static count: number = 0; // static

  static increment() {
    return (Counter.count = Counter.count + 1);
  }
  static decrement() {
    return (Counter.count = Counter.count - 1);
  }
}

const instance1 = new Counter(); // ekta memory
// console.log(instance1.increment()); // 1
// console.log(instance1.increment()); // 1 >> 2
// console.log(instance1.increment()); // 2 >>> 3

// const instance2 = new Counter(); // rekta different
// console.log(instance2.increment()); //1
// console.log(instance2.increment()); // 2

// const instance3 = new Counter();
// console.log(instance3.increment());
// console.log(instance3.increment());
// console.log(instance3.increment());
// console.log(instance3.increment());
// console.log(instance3.increment());
// console.log(instance3.increment());

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());

console.log(Counter.decrement())