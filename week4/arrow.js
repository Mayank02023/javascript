/*
Arrow Function:
----------------
An arrow function is a modern, more concise way to write function expressions in JavaScript. 
It was introduced in ES6 (ECMAScript 2015) and offers a cleaner syntax compared to traditional functions.
*/
// Syntax Example:
// ---------------
// Traditional function:

console.info("Traditional function:", TraditionalFn(2, 3)); // Output: it will return 5 as an output

function TraditionalFn(a, b) {
  return a + b;
}

// Arrow function:

// console.info("Arrow function:", ArrowFn(2, 3)); // Throw: ReferenceError: Cannot access 'ArrowFn' before initialization

const ArrowFn = (a, b) => a + b;
/*
Key Characteristics:
--------------------
1. **Shorter Syntax**: Arrow functions are more compact, especially for one-liners.

2. **No `this` Binding**: Arrow functions do not have their own `this` context. 
   They inherit `this` from the surrounding (lexical) scope.
   This is useful in callbacks and when working inside classes.

3. **Not Hoisted**: Unlike traditional functions, arrow functions are not hoisted.
   This means you **cannot use them before they are defined** in the code.
   This is because arrow functions are stored in variables — and variables (declared with `let` or `const`)
   are not hoisted in the same way functions are.

4. **Declaration Keyword Matters**:
   - If declared with `var`: It is hoisted but initialized as `undefined`, so calling it before definition will throw an error.
   - If declared with `let` or `const`: It is in the Temporal Dead Zone and cannot be accessed before initialization.

5. **No `arguments` object**: Arrow functions do not have their own `arguments` object.
   You must use rest parameters (`...args`) if you need access to arguments.

Conclusion:
-----------
Arrow functions are great for shorter, cleaner code, especially when working with callbacks, array methods like `map`, `filter`, `reduce`, or when preserving `this` in closures.
However, avoid them when you need your own `this`, such as in object methods or constructors.
*/

// Default parameters:
/*
Default parameters allow you to set default values for function parameters. If no argument is passed for that parameter (or if it's undefined), 
the default value is used. If you call function without passing any argument, it will get default value.
*/

// Syntax Example:

console.info("Traditional function:", TraditionalFn(10, 20)); // Output: 30

const DefaultParms = (a = 5, b = 5) => a + b; // define a function with default parameters

console.info("Default parameters (without arguments):", DefaultParms()); // call the function without passing any arguments and it will return: 10

console.info("Default parameters (with one argument):", DefaultParms(10)); // call the function with one argument(it will treat it as first argument) and it will return: 15

console.info("Default parameters (with two arguments):", DefaultParms(10, 20)); // call the function with two arguments and it will return: 30

console.info(
  "Default parameters (with undefined):",
  DefaultParms(undefined, 20)
); // call the function with undefined and it will return: 20

console.info("Default parameters (with null):", DefaultParms(null, 20)); // call the function with null and it will return: 20

// emplate literals ${}:

/*
Template literals (or template strings) in JavaScript are a way to work with strings that make it easier to include variables and expressions inside 
the string using the ${} syntax. Instead of using traditional quotes (' or ") to define strings, you use backticks (`). 
*/

// Syntax Example:

const userName = "John"; // define a variable
const greeting = `Hello, ${userName}!`; // use template literal to include variable
console.log(greeting); // Output: Hello, John!

/* 
Key Features of Template Literals:

   1. String Interpolation: ${expression} lets you insert variables or expressions directly into the string.
   2. Multi-line Strings: You can write multi-line strings without using \n.
   3. Function calls or expressions inside ${}.
*/

const getName = () => "Bob";
console.log(`Hi, ${getName()}!`); // Hi, Bob!

// Destructuring:

/*
Destructuring in JavaScript is a syntax feature that allows you to unpack values from arrays or properties from objects into 
distinct variables. It makes code cleaner and easier to read, especially when dealing with complex data structures.
*/

// Array Destructuring:

const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Skipping elements:
const [x, , z] = [10, 20, 30];
console.log(x); // 10
console.log(z); // 30

// Object Destructuring:

const user = { name: "Alice", age: 25 };
const { name, age } = user;

console.log(name); // Alice
console.log(age); // 25

//You can rename during destructuring:
const { name: personName, age: personAge } = user;
console.log(personName); // Alice
console.log(personAge); // 25

// 🛠️ Use Cases:

// 1. Function parameters:

const printUser = ({ name, age }) => {
  console.log(`Name: ${name}, Age: ${age}`);
};

printUser(user); // Name: Alice, Age: 25

// 2. Swapping values:

const value1 = 2;
const value2 = 3;

[value1, value2] = [value2, value1];

console.log(value1); // 3
console.log(value2); // 2

// 3. Nested destructuring:

const user1 = { name: "Alice", address: { city: "Wonderland" } };
const {
  name: propName,
  address: { city },
} = user1;

console.log(propName); // Alice
console.log(city); // Wonderland (it is the nested property)

// Spread/rest operators ... :

/*
 * The ... operator in JavaScript is super versatile — it’s used as both the spread operator and the rest operator, depending on the context.
 */

// Spread Operator: Used to expand elements of an iterable (like arrays, strings, or objects) into individual elements.

// Arrays:
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];
console.log(moreNums); // [1, 2, 3, 4, 5]

// Objects:
const person = { name: "John", age: 30 };
const newPerson = { ...person, city: "New York" };
console.log(newPerson); // { name: 'John', age: 30, city: 'New York' }

// Function Arguments:
const add = (a, b) => a + b;
const nms = [1, 2];
console.log(add(...nms)); // 3

// Strings:
const str = "Hello";
const chars = [...str];
console.log(chars); // ['H', 'e', 'l', 'l', 'o']

// Rest Operator: Used to collect the remaining elements into an array (or object).

// Arrays:
const restNums = [1, 2, 3, 4, 5];
const [first, ...rest] = restNums;
console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]

// Objects:
const restPerson = { nam: "John", age: 30, city: "New York" };
const { nam, ...restProps } = restPerson;
console.log(nam); // John
console.log(restProps); // { age: 30, city: 'New York' }

// Function Parameters:

function logAll(first, ...rest) {
  console.log(first); // first arg
  console.log(rest); // array of the rest
}
logAll(1, 2, 3, 4); // 1, [2, 3, 4]



/*
 * The ... operator in JavaScript is super versatile — it’s used as both the spread operator and the rest operator, depending on the context.
 */