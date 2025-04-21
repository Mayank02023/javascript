/**
 * 📘 What Are ES6 Classes:-
 *      ES6 classes are syntactic sugar over JavaScript’s existing prototype-based inheritance. They make it easier and more readable to create objects and deal with inheritance.
 */

// Before ES6:
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.greet(); // Hi, I'm Alice and I'm 30 years old.
person2.greet(); // Hi, I'm Bob and I'm 25 years old.

// Now greet is shared beetwen all instances of Person

// After ES6:

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const personobj1 = new Person("Alice", 30);
const personobj2 = new Person("Bob", 25);

personobj1.greet(); // Hi, I'm Alice and I'm 30 years old.
personobj2.greet(); // Hi, I'm Bob and I'm 25 years old.

// Now greet is shared beetwen all instances of Person

/**
 * ✅ Both do the same thing, but the class version is more intuitive, especially for developers coming from other object-oriented languages.
 *
 *
 * 🧱 Key Components of an ES6 Class
 *
 *   1. Class Declaration
 */

class Person {
  // class body
}

//  Or you can also use a class expression:
const Person = class {
  // class body
};

/**
 * 2. Constructor Method
 *      - A special method that is called when a new instance of the class is created.
 *      - If you don't define a constructor, JavaScript will provide a default constructor.
 *      - The constructor method is used to initialize the object's properties.
 */

class Person {
  constructor(name) {
    this.name = name;
  }
}


/**
 * 3. Instance Methods
 *      - Methods defined inside the class body are instance methods.
 *      - These methods are available on all instances of the class.
 *      - Automatically added to the class’s prototype.
 */ 

sayHello(){
    console.log(`Hello, I'm ${this.name}`);
};

/**
 * 4. Static Methods
 *      - Methods that are available on the class itself, not on instances.
 *      - Used for utility functions that don't need access to instance properties.
 */

class MathUtil{
  static add(a, b) {
    return a + b;
  }
}

MathUtil.add(1, 2); // 3


// 5. Inheritance with extends and super()

class Animal {
	constructor(name){
		this.name = name;
	}
	
	speak(){
		console.log(`${this.name} makes a sound.`);
	}
}

class Dog extends Animal {
	constructor(name, breed){
		super(name);
		this.breed = breed;
	}
	
	speak() {
	  console.log(`${this.name} barks.`);
	}
}

/**
 * extends creates a subclass that inherits from the parent class.
 * super() calls the parent class constructor.
 * You can override parent methods and still use super.methodName() to access them.
 * 
 * ✨ Summary
 * 
 *    Features               | Description
 *    -----------------------|---------------------------------
 *    Class                  | Syntax for creating a class
 *    Constructor            | Initializes new object properties
 *    Instance Methods       | Methods available on instances
 *    Static Methods         | Methods available on the class itself
 *    Inheritance            | Creating subclasses with extends
 *    super()                | Calls parent class constructor
 *    Method Override        | Overriding parent methods
 */