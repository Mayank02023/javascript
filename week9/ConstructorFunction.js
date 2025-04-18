/**
 * 🔧 Constructor Function:- A constructor function is a special type of function used to create and initialize objects. It’s like a 
 *                            blueprint for making objects, similar to a class in other languages.
 * 
 * 
 */

// 🧱 Basic Syntax
 function User(name, age){
    this.name = name;
    this.age = age;

    this.greet = function() {
      console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    };
  }

  const user1 = new User("Alice", 30);
  const user2 = new User("Bob", 25);

  user1.greet(); // Hi, I'm Alice and I'm 30 years old.
  user2.greet(); // Hi, I'm Bob and I'm 25 years old.


/**
 * 🔑 Key things:
 * 
 *      - You use the new keyword to create an instance.
 *      - Inside the function:
 *         - this refres to the newly created object.
 *         - this is returned automatically (unless you return something else explicitly).
 *      - The function name conventionally starts with a capital letter(PascalCase).
 *      - The constructor returns the new object.
 * 
 * 
 * 🚀 What Happens Behind the Scenes with new?
 * 
 *   When yod do new User('Alice', 30), JavaScript docs:
 * 
 *      1. Creates a new empty object: {}.
 *      2. Sets the prototype of the object to User.prototype.
 *      3. Binds this inside the constructor to the new object.
 *      4. Executes the constructor body.
 *      5. Returns the new Object automatically.
 */

/**
 * 🧠 Prototype Optimization:- To avoid each instance getting a copy of functions (wasting memory), use the prototype:
 */

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
  console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
};

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.greet(); // Hi, I'm Alice and I'm 30 years old.
person2.greet(); // Hi, I'm Bob and I'm 25 years old.

// Now greet is shared beetwen all instances of Person

/**
 * ✅ When to Use Constructor Functions
 * 
 *  User when:
 *    - You wanr prototype-based inheritance.
 *    - You're following OOP Patterns.
 *    - You prefer class-like behavior before ES6 class syntex.
 * 
 * But hosertly in modern javascript, class (introduced in ES6) is preferred over constructor functions, because it's more readable:
 * 
 */