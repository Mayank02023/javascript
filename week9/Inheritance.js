/**
 * Inheritance:- Inheritance is an OOP concept where a class (called the child or subclass) can inherit properties and behaviors
 *               (methods and attributes) from another class (called the parent or superclass).
 * 
 * It allows code resuability and establishes a hierarchical relationship between classes.
 * 
 * 🔸 Why Use Inheritance?
 *  
 *   - ✅ Reusability – Avoid rewriting code.
 *   - ✅ Code Organization – Group related classes hierarchically.
 *   - ✅ Polymorphism – Allow child classes to override parent methods.
 *   - ✅ Extensibility – Easily add new features by extending existing classes.
 * 
 * 📦 How It Works
 * 
 */

// Example 1: Simple Inheritance

class Parent{
    constructor(name){
        this.name = name;
    }
    
    speak() {
        console.log(`I am ${this.name}`);
    }
}

// Child class that inherits from Parent
class Child extends Parent {
    constructor(name, age) {
        super(name); // Call parent constructor
        this.age = age;
    }
    
    speak() {
        console.log(`I am ${this.name} and I am ${this.age} years old.`);
    }
}

// Usage
const parent = new Parent("John");
parent.speak(); // I am John

const child = new Child("Jane", 10);
child.speak(); // I am Jane and I am 10 years old.

/**
 * In this example:
 *   - Child extends Parent, inheriting its properties and methods.
 *   - super() calls the parent constructor.
 *   - Child overrides the speak method.
 *   - Each class has its own properties and methods.
 */

/**
 * 🔸 Types of Inheritance
 *   
 *    1. Single Inheritance – One child, one parent.
 *    2. Multiple Inheritance – One child, multiple parents.
 *    3. Multilevel Inheritance – A chain of inheritance (Grandparent → Parent → Child).
 *    4. Hierarchical Inheritance – Multiple children from one parent.
 *    5. Hybrid Inheritance – A combination of multiple inheritance and hierarchical inheritance.
 */

/**
 * 📚 Summary
 * 
 *      - Inheritance is a core OOP concept that allows classes to inherit properties and methods from other classes.
 *      - JavaScript uses prototypal inheritance, where objects inherit properties and methods from other objects.
 *      - The extends keyword is used to create a child class that inherits from a parent class.
 *      - super() is used to call the parent class constructor.
 *      - Inheritance promotes code reusability and establishes a hierarchical relationship between classes.
 */