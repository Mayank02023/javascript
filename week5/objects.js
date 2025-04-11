/*
 * Object:- An object is a collection of key-value pairs (properties and methods) used to store and manage data.
 *
 * Each property in an object has a key (also called a name or property name) and a value, which can be:
 * - A primitive (like string, number, boolean)
 * - Another object
 * - An array
 * - A function (then it's called a method)
 */

const user = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Wonderland",
  },
};

// 🧰 1. Common Built-in Object Methods

// Object.keys(), Object.values(), Object.entries()

const person = { name: "John", age: 25 };

console.log(Object.keys(person)); // ['name', 'age'] it returns all the keys of the passed object in the form of array
console.log(Object.values(person)); // ['John', 25] it returns all the values of the passed object in the form of array
console.log(Object.entries(person)); // [['name', 'John'], ['age', 25]] it returns all the key-value pairs of the passed object in the form of array

// Object.assign() – Merge or clone objects

const a = { x: 1 };
const b = { y: 2 };

const merged = Object.assign({}, a, b); // { x: 1, y: 2 }
console.log(merged);

// Object.freeze() – Make object immutable

const config = { debug: true };
Object.freeze(config);
config.debug = false; // ❌ no effect

// 🔁 2. Looping with Object Methods

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

/**
 * 🔗 3. Method Chaining:-
 *       Call multiple methods in a single line by returning this from each method.
 */

const calculator = {
  value: 0,
  add(num) {
    this.value += num;
    return this;
  },
  subtract(num) {
    this.value -= num;
    return this;
  },
  multiply(num) {
    this.value *= num;
    return this;
  },
  result() {
    console.log(this.value);
    return this;
  },
};

calculator.add(10).subtract(2).multiply(3).result(); // 👉 24

// 🔥 return this; is the secret sauce for chaining!

/**
 * 👀 4. Getters & Setters
Special methods to control access to properties.
 */

const personObj = {
  firstName: "Prince",
  lastName: "Kurmi",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName({ firstName, lastName }) {
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

console.log(personObj.fullName); // Output: Prince Kurmi
personObj.fullName = { firstName: "Mayank", lastName: "Gangwar" };
console.log(personObj.fullName); // Output: Mayank Gangwar

/**
 * 🔒 5. Binding this:- Sometimes this loses its context — especially in callbacks. Use .bind() to lock it down
 */
// 
const obj = {
  message: "Hello",
  logMessage() {
    console.log(this.message);
  }
};

setTimeout(obj.logMessage, 1000); // ❌ undefined (this is lost)

const bound = obj.logMessage.bind(obj);
setTimeout(bound, 1000); // ✅ Hello


/**
 * 🏛️ 6. Classes with Methods: ES6 class syntax for cleaner object creation + methods.
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }

  get isAdult() {
    return this.age >= 18;
  }
}

const bob = new Person("Bob", 25);
bob.greet();             // 👉 Hi, I'm Bob
console.log(bob.isAdult); // 👉 true


/**
 * 💡 Pro Tip: 
 *    1. Use chaining when you want a fluent interface.
 *    2. Getters/Setters when you want to protect or transform data.
 *    3. bind() when this might get lost.
 *    4. Classes when building reusable models.
 */