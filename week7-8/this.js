/**
 * 🧠 What is this:- this refers to the context in which a function is called — essentially,
 *                   it points to the object that is "executing" the current code.
 *
 * The value of this depends on how a function is called, not where it is defined.
 */

// 📌 this in Different Contexts:

// 1. Global Context (Outside Any Function)
console.log(this); // in browser: `window`, in Node.js: `{}` or `global`

/**
 * In a browser:
 *               console.log(this === window); // true
 *
 * So in the global scope, this refers to the global object — window in browsers.
 */

// 2. Inside a Regular Function

function show() {
  console.log(this);
}
show(); // in browser: `window`, in strict mode -> `undefined`

// 3. Inside a object function

const user = {
  name: "Prince",
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};
user.greet(); // Output: Hi, I'm Prince

// ✅ Here, this refers to the object (user) that called the method.

// 4. this Inside Arrow Functions

const user2 = {
  name: "Prince",
  greet: () => {
    console.log(`Hi, I'm ${this.name}`);
  },
};
user2.greet(); // Output: Hi, I'm undefined

// ❌ Arrow functions do not bind their own this. They inherit this from their lexical scope (where they were defined).

// but proper use this with arrow inside method:

const user3 = {
  name: "Prince",
  greet() {
    const arrow = () => {
      console.log(`Hi, I'm ${this.name}`); // this -> user
    };
    arrow();
  },
};
user3.greet(); // Output: Hi, I'm Prince

// 5. In Constructor Functions

function Person(name) {
  this.name = name;
}

const person = new Person('Prince');
console.log(person.name); // Output: Prince


// 6. In Class Syntax

class Animal{
    constructor(type){
        this.type = type;
    }
    
    speak(){
        console.log(`I'm a ${this.type}!`);
    }
}

const cat = new Animal("cat");
cat.speak(); // Output: I'm a cat