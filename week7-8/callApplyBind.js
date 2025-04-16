/**
 * bind(), call(), and apply() in JavaScript — three powerful methods that allow you to control the value of this when calling
 * functions. They’re commonly used in object method borrowing, event handlers, and functional programming.
 *
 * 🧠 Core Idea: In JavaScript, functions are first-class objects, which means they can be assigned to variables, passed as arguments,
 *                or even have their context (this) manually set.
 *
 *
 * That’s where call(), apply(), and bind() come in.
 * ✅ call() - Calls the function with a specific this value and arguments.
 * ✅ apply() - Similar to call(), but takes an array or arguments list.
 * ✅ bind() - Creates a new function with a bound this value.
 *
 */

// 1. 🔗 call()

// ✅ Use it for: calling a function with a specific this value and arguments.

const person = {
  name: "Prince",
  age: 24,
  intro() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  },
};
person.intro();

// call() with arguments
const person1 = {
  name: "Mayank",
  age: 24,
};
const intro = person.intro.call(person1); // Hi, I'm Mayank and I'm 24 years old.


// 2. 📎 apply()

// ✅ Use it for: calling a function with a specific this value and arguments.

const person2 = {
  name: "Prashant",
  age: 16,
};
const intro2 = person.intro.apply(person2); // Hi, I'm Prashant and I'm 16 years old.

/**
 * Almost the same as call(), but takes arguments as an array.
 * Useful when you want to spread arguments from an array or array-like object.
 */

const nums1 = [3, 6, 2, 8, 4];
console.log(Math.max(nums1)); // NaN


const nums2 = [3, 6, 2, 8, 4];
const max = Math.max.apply(null, nums2);
console.log(max); // 8


// 3. 🔗 bind()

// ✅ Use it for: creating a new function with a bound this value.

const person3 = {
  name: "Mayank 4",
  age: 23,
};
const intro3 = person.intro.bind(person3); // Hi, I'm Mayank and I'm 24 years old.
console.log(intro3());

/**
 * Does NOT invoke the function immediately.
 * Returns a new function with this permanently bound.
 * You can call the returned function later.
 */

