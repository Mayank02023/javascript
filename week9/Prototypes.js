/**
 * 🔁 What is a Prototype in JavaScript?
 * 
 *      In JavaScript, every object has an internal link to another object called its prototype.
 *      This prototype object can cantain shared properties and methods. This is how inheritance works in JavaScript.
 * 
 * 📦 Think of it Like This:
 *      Imagine a chain of blueprints:
 * 
 *         - You create a new Object.
 *         - if you try to access a property or method that the object doesn't have, JavaScript looks up the prototype chain to find it.
 * 
 * This chain is called the prototype chain.
 * 
 */

// 🔧 How it Works

// Example 1: Basic Prototype Inheritance

function PersonObj(name){
    this.name = name;
}

PersonObj.prototype.sayHello = function(){
    console.log(`Hello, I'm ${this.name}`);
};

const john = new PersonObj("John");
john.sayHello(); // Hello, I'm John

/**
 * Here's what's happening:
 *   - PersonObj is a constructor function.
 *   - PersonObj.prototype.sayHello is a method available to all instances of PersonObj.
 *   - john doesn't have sayHello directly, but JavaScript finds it on PersonObj.prototype.
 */

/**
 * 🧬 Prototype Chain
 * 
 * Let's inspect the prototype chain:
 */

john.__proto__ === PersonObj.prototype; // true
PersonObj.prototype.__proto__ === Object.prototype; // true

/**
 * So the chain looks like this:
 * 
 *      john -> PersonObj.prototype -> Object.prototype -> null
 *      Each level is searched for the method/property you try to access.
 * 
 * 🔄 Class Syntax (Same Idea, Cleaner Syntax)
 */
class Animal {
    speak() {
      console.log("Animal speaks");
    }
  }
  
  const dog = new Animal();
  dog.speak(); // Animal speaks

// Even with classes, javaScript still uses prototypes under the hood. speak is added to Animal.prototype.

/**
 * 📚 Summary
 * 
 *      - Every object in JavaScript has a prototype.
 *      - A prototype is just another object that can have properties/methods.
 *      - When you access a property, JavaScript checks:
 *          1. Does the object have it's own property?
 *          2. Keep going up the chain until you find it or reach null.
 *      - This enables inheritance and method sharing between objects.
 */