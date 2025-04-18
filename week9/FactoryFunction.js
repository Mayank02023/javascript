/**
 * Factory Function:- Factory functions in JavaScript are functions that return objects. They’re an alternative to using classes or constructor functions when you want to create multiple
 *                    instances of similar objects. They offer a cleaner, more functional programming-oriented way to manage object creation, especially when working with encapsulation,
 *                    closures, or object composition.
 *
 * Let’s go deep on how they work, why they're useful, and how they compare to other patterns like constructor functions and classes.
 *
 *
 * 🧠 1. What is a Factory Function:- A factory function is just a normal function that returns an object:
 */

// Example of a factory function

function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hi, I'm ${name} and I'm ${age} years old.`);
    },
  };
}

// Usage of the factory function

const user1 = createUser("Alice", 30);
const user2 = createUser("Bob", 25);

user1.greet(); // Hi, I'm Alice and I'm 30 years old.

/**
 * ✅ 2. Why Use Factory Functions:-
 *      - Encapsulation using closures
 *      - No new keyword
 *      - No prototype confusion
 *      - Easier to test
 *      - More flexible for object composition
 *      - Great for object composition (mixins, functional inheritance)
 * 
 * 🔐 3. Using Closures for Private Data:-
 *      - Factory functions can create private data using closures.
 *      - This is useful for encapsulation and data hiding.
 *      - Private data can only be accessed through methods defined in the factory function.
 *  
 */

// Example of a factory function with private data

function createCounter() {
    let count = 0; // private variable
  
    return {
      increment() {
        count++;
        console.log(count);
      },
      decrement() {
        count--;
        console.log(count);
      },
      getCount() {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  counter.increment(); // 1
  counter.increment(); // 2
  console.log(counter.getCount()); // 2
  console.log(counter.count); // undefined (private)

/**
 * 🧩 4. Factory vs Constructor vs Class
 * 
 *    Feature           | Factory Function                | Constructor Function           | Class
 * ---------------------|---------------------------------|--------------------------------|----------------
 *    Syntax            | Regular function                | Function with new              | class keyword
 *    Private variables | Easy via closures               | Hard, unless using hacks       | Hard, but possible with #
 *    Prototypes        | Manual setup needed             | Automatic                      | Automatic
 *    Inheritance       | Through composition             | Through prototypes             | Through extends
 *    Flexibility       | High (custom returns, closures) | Medium                         | Medium
 * 
 * 
 * 🛠️ 5. Factory Composition (Mixins):- You can easily compose multiple behaviors:
 * 
 */

function withJumping(){
    return {
        jump(){
            console.log(`Jump!`);
        }
    };
}

function withRunning(){
    return {
        run(){
            console.log('Run!');
        }
    };
}

function createAnimal(name){
    return{
        name,
        ...withJumping(),
        ...withRunning()
    };
}

const rabbit = createAnimal('Rabbit');
rabbit.jump(); // Jump!
rabbit.run(); // Run!

// This is object composition – combining simple behaviors to build complex objects without inheritance.


/**
 * ⚠️ 6. Common Pitfalls
 *      Each object gets its own copy of functions (could be memory inefficient). You can solve this with shared methods:
 * 
 */

const userMethods = {
    greet(){
        console.log(`Hello, I'm ${this.name}`);
    }
};

function createUser(name){
    const user = Object.create(userMethods);
    user.name = name;
    return user;
}

const user5 = createUser("Alice");
user5.greet(); // Hello, I'm Alice

/**
 * 🧪 Summary
 *      -✅ Factory functions are regular functions that return objects.
 *      -✅ They allow private state through closures.
 *      -✅ Support object composition, which is more flexible than class inheritance.
 *      -✅ Avoids pitfalls with new, this, and prototype confusion.
 *      -✅ They can be used to create objects with shared methods.
 */