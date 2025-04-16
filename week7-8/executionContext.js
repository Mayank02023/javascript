/**
 * Execution Context and Closures in JavaScript — two fundamental concepts that work together to
 * make JS powerful (and sometimes tricky).
 *
 * 🧠 1. Execution Context:- An execution context is a container that stores variables and functions
 *                            that are accessible during the execution of a program.
 *
 * Types of Execution Context:
 * - Global Execution Context (GEC): The outermost execution context that exists by default.
 * - Function Execution Context (FEC): Created when a function is called.
 * - Eval Execution Context: Created when the eval() function is called (rarely used).
 */

/**
 * ✅ What is in an Execution Context?
 *      Each execution context has three key components:
 *
 *  Component                   | Description
 * -----------------------------|-----------------------------------
 *     Variable Environment     | Stores variables declared with var, function declarations.
 *     Scope Chain              | Keeps track of the outer environment reference (lexical environment).
 *     'this' binding           | Depends on how the function was called.
 *
 */

// 🧭 Example: Execution Context Flow

var x = 10;

function outer() {
  var y = 20;

  function inner() {
    var z = 30;
    console.log(x + y + z);
  }
  inner();
}

outer();

/**
 * 🧠 Here's what happens:
 *
 * 1. Global Execution Context is created:
 *      - Variables: x = 10, outer = function
 * 2. outer() is called → New Function Execution Context is pushed
 *      - Variables: y = 20, inner = function
 * 3. inner() is called → Another FEC is created
 *      - Variables: z = 30
 * 4. JS looks for x, y, z through the scope chain
 * 5. inner() completes execution → Popped from stack
 * 6. outer() completes execution → Popped from stack
 */

/**
 * 🧠 Scope Chain
 *      - Scope chain is a chain of objects that are used to resolve variable names.
 *      - Each object has a reference to its parent object.
 *      - When a variable is not found in the current object, the search continues in the parent object.
 */

/**
 * 📤 Stack during execution:
 *      Output:
 *              Global EC
 *              -> outer() EC
 *                 -> inner() EC
 */

/**
 * 🧠 2. Closures:- A closure is created when a function "remembers" its lexical scope even after
 *                  the outer function has finished executing.
 */

function outer() {
  let counter = 0;

  return function inner() {
    counter++;
    console.log("Counter:", counter);
  };
}

const fn = outer(); // outer() is done
fn(); // Counter: 1
fn(); // Counter: 2

/**
 * ⚙️ How It Works
 *      - When outer() runs, it creates a local variable counter.
 *      - It returns the inner function.
 *      - inner closes over (remembers) the variable counter, even though outer() has finished.
 *      - This is a closure.
 */

/**
 * 🎯 Memory Leak Warning:- Closures hold onto memory, so be careful not to create unintended closures
 *                         in large-scale apps — it can prevent variables from being garbage-collected.
 */