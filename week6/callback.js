/**
 * In JavaScript, callbacks are a fundamental concept that play a crucial role in asynchronous programming and managing how tasks are executed,
 * especially in a non-blocking environment like JavaScript’s event loop.
 *
 * ✅ What is a Callback:- A callback is a function passed as an argument to another function, and it’s usually executed after some kind of event or operation has completed.
 *
 */

// ✅ Example 1: Simple Callback

function greeting(name) {
  console.log(`Hello, ${name}!`);
}

function processName(callback) {
  const name = "Mayank Gangwar";
  callback(name);
}

processName(greeting);

/**
 * 🤔 Why Use Callbacks:
 *
 * - Asynchronous Programming: Callbacks are essential in JavaScript for handling asynchronous operations, such as API calls, file I/O, and timers.
 * - Event Handling: They are used in event-driven programming to handle user interactions, like button clicks or key presses.
 * - Higher-Order Functions: Callbacks are often used in higher-order functions, which take other functions as arguments or return them.
 * - Error Handling: They help in handling errors that may occur during operations, such as failed API calls or invalid inputs.
 * - Modularity: Callbacks allow you to break down complex logic into smaller, reusable functions.
 * - Flexibility: They provide flexibility in how you structure your code, allowing you to handle different scenarios dynamically.
 * - Ensuring code execution order, especially when tasks take time.
 */

/**
 * 🧪 Under the Hood: How Async Callbacks Work (Event Loop):- JavaScript runs in a single-threaded environment, meaning only one
 *                                                             piece of code runs at a time. But with the help of the event loop,
 *                                                             it can handle async operations without blocking.
 *
 * Let’s understand this with the queue system:
 *      1. JS runs your code line-by-line (synchronous part).
 *      2. If it sees something like setTimeout, it offloads the task to the browser (or Node.js APIs).
 *      3. When the task completes, the callback is pushed to the callback queue.
 *      4. The event loop checks the callback queue and puts the callback into the call stack when the call stack is empty.
 *      5. This process continues until all tasks are completed.
 *
 * This mechanism is what allows JavaScript to not block while waiting on slow operations.
 */

/**
 * 🧱 Callback Hell (The Downside):-When callbacks are nested too deeply, it creates hard-to-read and error-prone code.
 *
 * - Callbacks can lead to a nested structure, making the code hard to read and maintain.
 * - Error handling becomes more complex, as you need to handle errors at each level.
 * - It can lead to a pyramid of doom, where callbacks are nested inside each other.
 * - Limited support for async/await and modern features like async functions.
 *
 * This is called callback hell and is one reason modern JS uses Promises and async/await.
 */

// Example of callback hell
/*

doSomething(function (result1) {
  doSomethingElse(result1, function (result2) {
    doAnotherThing(result2, function (result3) {
      console.log(result3);
    });
  });
});

*/

/**
 * 🧪 How to Avoid Callback Hell:-
 *
 * - Use Promises: Convert callbacks to promises to handle async operations more elegantly.
 * - Use async/await: Modern syntax that makes async code look synchronous and easier to read.
 * - Use libraries like Bluebird or Ramda: These provide utilities to handle promises more effectively.
 * - Use tools like Babel: To transpile async/await code to plain promises for older environments.
 */
