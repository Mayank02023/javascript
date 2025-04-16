/**
 *  Let’s break down the Event Loop and Call Stack — these are core parts of how JavaScript handles asynchronous operations, 
 *  and understanding them helps you write efficient and non-blocking code.
 * 
 * 🧠 JavaScript Runtime Overview:- JavaScript is single-threaded, which means it can only do one thing at a time.
 *     So how does it handle things like:
 *          1. setTimeout?
 *          2. Promises?
 *          3. API calls?
 *          4. Event listeners?
 * 
 * The answer: Call Stack, Web APIs, Callback Queue, and the Event Loop working together.
 * 
 * ⚙️ Key Components:
 *      1. Call Stack
 *      2. Web APIs
 *      3. Callback Queue
 *      4. Event Loop
 * 
 * 1. Call Stack
 *      - It’s a stack data structure (LIFO — Last In, First Out).
 *      - Stores function calls.
 *      - When a function is invoked, it is pushed onto the stack.
 *      - When function finishes, it is popped off.
 */

// Example:

function greet() {
    console.log("Hello");
  }
  function sayHi() {
    greet();
  }
  sayHi();
  
  /**
   * 🪜 Stack flow:
   * 1. sayHi() is called, pushed onto stack.
   * 2. greet() is called, pushed onto stack.
   * 3. console.log("Hello") pushed onto stack.
   * 4. console.log("Hello") finishes, popped from stack.
   * 5. greet() finishes, popped from stack.
   * 6. sayHi() finishes, popped from stack.
   */

/**
 * 2. Web APIs
 *      - Browser-provided APIs for tasks like timers, network requests, and DOM manipulation.
 *      - These APIs handle tasks asynchronously, allowing the main thread to remain responsive.
 * 
 * When you call things like:
 *      1. setTimeout()
 *      2. fetch()
 *      3. DOM Events
 * 
 * They are not handled by the Call Stack. Instead, they are passed to the browser's Web APIs.
 */

/**
 * 3. Callback Queue:-
 *      - When Web API finishes (e.g., timer ends, API response arrives), 
 *              the callback is placed in the callback queue.
 * 
 *      - The Event Loop will push that callback to the call stack only if (call stack)it's empty.
 * 
 */

/**
 * 4. Event Loop
 *      - The Event Loop is a continuous process that checks the Call Stack and Callback Queue.
 *      - If the Call Stack is empty, the Event Loop will take the first callback from 
 *              the Callback Queue and push it to the Call Stack.
 * 
 *      - This process continues until the Call Stack is empty.
 * 
 * Note:- Constantly watches the Call Stack and Callback Queue. If the Call Stack is empty, 
 *        it pushes the next item from the queue onto the stack.
 */

/**
 * 🧪 Visual Example: setTimeout
 */
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 1000);

console.log("End");

/**
 * 🪜 Stack flow:
 * 1. console.log("Start") → executed immediately.
 * 2. setTimeout() is handed to the Web API.
 * 3. console.log("End") → executed immediately.
 * 4. setTimeout() → after 1000ms, callback is pushed to the callback queue.
 * 5. Event Loop checks if the Call Stack is empty → yes.
 * 6. Event Loop pushes the callback from the callback queue to the Call Stack.
 * 7. console.log("Timeout") → executed.
 */

/**
 * Output:
 *          Start
 *          End
 * Timeout
 */


//⚡ Example with Promises (Microtask Queue)

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

setTimeout(() => {
  console.log("Timeout");
}, 1000);

console.log("End");

/**
 * Output:
          Start
          End
          Promise
          Timeout
 */

/**
 * 🧩 Why?
 *      1. Promise.then() goes to microtask queue (has higher priority than callback queue).
 *      2. setTimeout(..., 0) goes to callback queue.
 *      3. Event Loop always empties microtasks before moving to callbacks.
 * 
 */


/**
 * 🔁 Summary
 * 
 *      Component           | Role
 * -------------------------|-----------------------------------
 *       Call Stack         | Executes functions (one at a time)
 *       Web APIs           | Handles async ops (timers, fetch, DOM)
 *       Callback Queue     | Stores callbacks from async tasks (low priority)
 *       Microtask Queue    | Stores promise callbacks (high priority)
 *       Event Loop         | Moves tasks from queues to stack when it’s empty
 */


/**
 * 🧠 Quick Analogy
 *    Imagine you're a chef (Call Stack), and you have:
 * 
 *      - A timer set (Web API).
 *      - Orders lined up (Callback Queue).
 *      - VIP orders (Microtask Queue).
 * 
 * You handle one dish at a time. After each, you check the VIP queue first, then regular queue. 
 * That's the Event Loop in action.
 */
