/**
 * 🧱 What is a Promise:- A Promise is an object that represents the eventual completion (or failure) of an asynchronous
 *                         operation and its resulting value.
 *
 *     ✅ A Promise has 3 States:
 *
 *          1. Pending - the initial state.
 *          2. Fulfilled - the state after the operation is completed successfully.
 *          3. Rejected - the state after the operation fails.
 */

const { rejects } = require("assert");
const { response } = require("express");
const { resolve } = require("path");

// ✅ Example 1: Simple Promise

const promise = new Promise((resolve, reject) => {
  const name = " Mayank Gangwar";
  const isTrue = false;
  isTrue ? reject("Something went wrong") : resolve(name);
});
/**
 * 🔗 .then() – Handling Success - .then() is called when the promise is resolved (fulfilled).
 * 🔗 .catch() – Handling Failure - .catch() is called when the promise is rejected.
 */
promise.then((name) => console.log(name)).catch((error) => console.log(error));

/**
 * 🧪 How to Use Promises Effectively:
 *
 * - Use .then() for success and .catch() for error handling.
 * - Chain multiple .then() calls for sequential operations.
 * - Use .catch() to handle errors in the entire chain.
 * - Use async/await for better readability and error handling.
 */

// ✅ Example 2: Chaining Promises

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});

promise1
  .then((result) => {
    console.log(result);
    return promise2;
  })
  .then((result) => {
    console.log(result);
    return promise3;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//   .then() is called when the promise is resolved (fulfilled).

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Post Data:", { ...data });
  })
  .catch((error) => {
    console.log("Error:", error); // ✅ This will run when thrown on any .then()
  });
