// /**
//  * 🔧 What is async/await:- async/await is a modern JavaScript feature that allows you to write asynchronous code in a more linear
//  * and readable way.
//  *
//  * - async functions always return a Promise.
//  * - await can only be used inside an async function.
//  * - await pauses the execution of the async function until the Promise is resolved or rejected.
//  */

// // 🔍 Under the Hood (What Really Happens?)
// // This code:

// async function getValue() {
//   return 42;
// }
// getValue().then(console.log); // 42

// // Is equivalent to:

// function getValue() {
//   return Promise.resolve(42);
// }
// getValue().then(console.log); // 42

// // So an async function always returns a Promise, even if you return a simple value.

// // 🧱 Basic Structure:

// const fetchData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // The function pauses at await fetch(...) until the fetch promise resolves.
//   const data = await response.json();
//   return data;
// };

// fetchData().then((data) => console.log(data?.id));

// // 🧯 Error Handling with async/await:- If any awaited promise is rejected, it jumps to the catch block. This is cleaner than
// // chaining .catch() everywhere.

// const fetchDataError = async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchDataError().then((data) => console.log(data?.id));


// // ⏱ How It Works With the Event Loop

// // 1. When you call an async function, it returns a Promise.
// // 2. The function pauses at await fetch(...) until the fetch promise resolves.
// // 3. The event loop moves on to other tasks while the fetch is in progress.
// // 4. Once the fetch is complete, the event loop resumes the async function.
// // 5. The result is passed to the next line of the async function.
// // 6. If there's another await, the event loop waits again.
// // 7. This pattern continues until the async function completes.
// // 8. If any await fails, the catch block is executed.
// // 9. The event loop ensures that the UI remains responsive during async operations.
// // 10. This is why async/await is preferred over callbacks and promises for readability and maintainability.
// // 11. Even though await looks like it's blocking, it’s actually non-blocking. The function is suspended and control is returned to the event loop.

// // 🧠 Here's a simplified mental model:

async function run(){
  console.log(`Start`);
  await new Promise((res) => setTimeout(res, 1000)); // this line blocks the execution of the async function until the promise resolves.
  console.log(`End`);
}
console.log(`1`);
run();
console.log(`2`);
