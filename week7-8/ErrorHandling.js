/**
 * Error handling using try, catch, and finally in JavaScript. These constructs are critical when writing robust, fault-tolerant
 * applications — especially when dealing with asynchronous code, API calls, or user input.
 *
 * 🧨 What is Error Handling:- When your JavaScript code runs into an issue (e.g., syntax error, network failure, undefined variable),
 *                             it throws an error. Without proper handling, this can break your entire application.
 */

// Enter: try...catch...finally

try {
  // Code that may throw an error
} catch (error) {
  // Code that runs if an error occurs
} finally {
  // Code that always runs (optional)
}

/**
 * 🔍 Deep Explanation of Each Block
 *
 * ✅ try
 *    - Wrap risky code that might throw an error
 *    - If no error, skip catch and finally blocks
 */

try {
  // Code that may throw an error
  console.log("Start");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  // let's suppose the API call fails the it just jumps to catch block
  // orther wise it will continue to the next line
  const result = await response.json();
  return result;
} catch (error) {
  // Code that runs if an error occurs
  console.log("Error:", error);
} finally {
  // Code that always runs (optional)
  console.log("End");
}
// Define an async function to fetch a specific post
async function fetchPost() {
  try {
    // Log the start of the operation
    console.log("Start");

    // Await the response from the API call
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // let's suppose the API call fails the it just jumps to catch block orther wise it will continue to the next line

    // Check if the HTTP status indicates a successful response
    if (!response.ok) {
      // If not, manually throw an error to be caught in the catch block
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON body of the response
    const result = await response.json();

    // Return the parsed result
    return result;

  } catch (error) {
    // Handle any errors that occur during the fetch or JSON parsing
    console.error("Fetch failed:", error);

    // Optionally return a fallback value if needed
    return null;

  } finally {
    // This block always runs, whether an error occurred or not
    console.log("End");
  }
}

/**
 * 🛠️ catch
 *    - Executes only if an error occurs in the try block
 *    - The error object (e) contains:
 *      - name: type of error
 *      - message: description
 *      - stack: stack trace (where it happened)
 */

try {
  JSON.parse("{ malformed json }");
} catch (e) {
  console.log("Error Name:", e.name);     // SyntaxError
  console.log("Message:", e.message);     // Unexpected token ...
}


/**
 * 🔁 finally
 *    - Runs no matter what — whether there’s an error or not.
 *    - Often used for cleanup (closing DB, hiding loaders, etc.)
 */
try {
  console.log("Doing risky work...");
  throw new Error("Oops!");
} catch (e) {
  console.log("Handled error.");
} finally {
  console.log("Cleanup work (always runs).");
}

/**
 * 🔥 Custom Errors: You can throw your own errors using throw:
 */

function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero!");
  return a / b;
}

try {
  divide(4, 0);
} catch (e) {
  console.error("Custom Error:", e.message);
}


/**
 * 🧵 Asynchronous Try/Catch
 *   -Works great with async/await:
 */
async function loadUser() {
  try {
    const res = await fetch("/user");
    const user = await res.json();
    console.log(user);
  } catch (error) {
    console.error("Async error caught:", error.message);
  }
}

// ⚠️ Without try/catch, unhandled async errors would crash your app silently.


/**
 * 🔁 What if I don’t use try/catch?
 *  Errors can:
 *    - Go uncaught and bubble up
 *    - Crash the app
 *    - Be impossible to debug in production
 * 
 *  ✅ Always use try/catch for:
 *    - Critical operations
 *    - User input
 *    - API calls
 *    - Async operations
 *    - File systems / databases
 *    - JSON parsing
 * 
 */

/**
 * 🧠 Summary
 * 
 *      Block               | Purpose                           | Runs When
 * -------------------------|-----------------------------------|-----------------------------------
 *      try                 | Code that might throw an error    | Always
 *      catch               | Handle thrown errors              | Only when error in try
 *      finally             | Cleanup or final steps            | Always (whether error or not)
 */
