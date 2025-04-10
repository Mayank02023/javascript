/*
    Closures:- A closure is a function that retains access to its lexical scope, even when that function is executed outside of its original context. 
               In other words, a closure "remembers" the variables from its parent function, allowing it to access and manipulate them even after the 
               parent function has finished executing.

    1. Lexical environment means the variables that were in scope when the function was created.
    2. Closures are commonly used for data privacy, function factories, and callbacks.

*/

// Syntax Example:

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2

/*
 * Here, inner is a closure — it has access to count, even though outer has already finished running.
 * Want a one-liner definition too?
*/


/*
 *  Scope:- Scope is the context in which values and expressions are visible and accessible. It determines the lifetime and visibility of variables, functions, classes
 *          and other identifiers in a program.
 *  
 *  In Simple Terms:- Scope defines where in your code you can use or reference a particular variable or function.
 * 
 *  JavaScript Has These Main Types of Scope: - 
*/

// 1. Global Scope – Accessible from anywhere in the code.

let globalVar = "I'm global";

function sayHi() {
  console.log(globalVar); // ✅ Accessible here
}

// 2. Function Scope - Accessible only inside the function where it is declared.

function myFunction() {
  let localVar = "I'm inside myFunction";
  console.log(localVar);
}

// 3. Block Scope - Accessible only within a specific { } block (like in if, for, etc.).

if (true) {
  let blockVar = "I'm inside a block";
  console.log(blockVar);
}

// 4. Module Scope – In ES6 modules, variables are scoped to the module file.

// 5. Lexical Scope - Accessible only within a specific lexical (static) scope.
