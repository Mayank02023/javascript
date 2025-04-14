/**
 * 📦 What is JSON:- JSON (JavaScript Object Notation) is a lightweight data format used for exchanging data between a client (like a browser or app) and a server.
 * ✅ JSON is:
 * - A string format (text-based)
 * - Easy to read and write
 * - Built on JavaScript object syntax
 */

/*
{
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com"
}
*/

// 🛠 JSON Parsing in JavaScript

// 1. Parse JSON string to javaScript object:
const jsonStr = `{ "name": "Mayank", "age": 24 }`;
const parseObj = JSON.parse(jsonStr);
console.log(parseObj);

// 2. Convert javaScript object to JSON string:
const user = { name: "Mayank", age: 24 };
const jsonStr2 = JSON.stringify(user);
console.log(jsonStr2);

/**
 *                      🛠 JSON Parsing in JavaScript
 *
 * 🔥 What is an API: An API (Application Programming Interface) allows two systems to talk. In web development, you often fetch data from REST APIs
 *                     using HTTP requests (like GET, POST, etc.).
 */

// fetch() - Making API Calls: fetch() is a built-in JavaScript method to make network requests.

// 1. Get Request (then catch)
const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      console.log({ ...data });
    })
    .catch((error) => {
      console.log(error);
    });
};

// 2. POST Request (async await): 🔁 Sending Data with POST (JSON body)

const createPost = async () => {
  const postData = {
    title: "New Post",
    body: "this is a new blog post.",
    userId: 1,
  };

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      headers: {
        "contents-type": "application/json",
      },
      body: JSON.stringify(postData), // convert js object to json string
    });

    if (!response.ok) throw new Error("Request failed!");

    const result = await response.json(); // parse server response
    console.log("Created Post:", result);
  } catch (error) {
    console.error("Create Post Error:", error.message);
  }
};

/**
 * 🧠 Behind the Scenes:
 * - fetch is asynchronous and returns a Promise.
 * - All this is non-blocking thanks to the JavaScript event loop.
 */
