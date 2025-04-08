# Javascript Behind the Scenes

A deep dive into how JavaScript works internally.

## JavaScript Engine

JavaScript engines (like V8 in Chrome/Node.js) execute JavaScript code through several steps:

1. **Parsing**: Code is parsed into an Abstract Syntax Tree (AST)
2. **Compilation**: The AST is compiled to machine code via:
   - Just-In-Time (JIT) compilation
   - Optimization of frequently used code
3. **Execution**: Code runs in the call stack

## Key Concepts

### 1. Execution Context
- Global execution context (for global code)
- Function execution context (for each function call)
- Contains: Variable Environment, Scope Chain, and 'this' keyword

### 2. Call Stack
- Tracks where we are in code execution
- LIFO (Last In, First Out) structure
- Manages execution contexts

### 3. Event Loop
```
┌───────────────────────┐
│        Call Stack     │
└─────────────┬─────────┘
              │
┌─────────────┴─────────┐
│      Event Loop       │
└─────────────┬─────────┘
              │
┌─────────────┴─────────┐
│    Callback Queue     │
└───────────────────────┘
```
- Manages asynchronous operations
- Coordinates between Call Stack and Callback Queue
- Ensures non-blocking behavior

### 4. Memory Management
- Uses Garbage Collection
- Mark and Sweep algorithm
- Reference counting

### 5. Scope and Closures
- Lexical scoping
- Variable access rules
- Closures preserve scope chain
- 
- 
- Absolutely! Here's a **JavaScript learning roadmap with an estimated timeline**, assuming you're learning **2 hours/day** (adjustable based on your pace). It's structured over **12 weeks**, but you can go faster or slower depending on your schedule and experience.

---

## 🗓️ **Week 1–2: JavaScript Fundamentals (Basics)**

✅ Focus: Understand syntax, data types, and control flow.

- ✅ What is JavaScript? How to run it
- ✅ Variables – `let`, `const`, `var`
- ✅ Data Types – string, number, boolean, null, undefined, arrays, objects
- ✅ Operators – arithmetic, logical, comparison
- ✅ Conditional Statements – `if`, `else`, `switch`
- ✅ Loops – `for`, `while`, `do...while`
- ✅ Basic Functions – declaration, parameters, return values
- ✅ Array basics – `push`, `pop`, `map`, `filter`, etc.

📌 **Project**: Number guessing game or To-Do list (console-based)

---

## 🗓️ **Week 3: DOM & Events**

✅ Focus: Learn how to manipulate web pages using JavaScript.

- ✅ DOM tree structure
- ✅ `document.querySelector`, `getElementById`, etc.
- ✅ Changing text, styles, and attributes
- ✅ Event listeners – `click`, `input`, `submit`, etc.
- ✅ Forms & validation basics

📌 **Project**: Build an interactive To-Do App or Tip Calculator

---

## 🗓️ **Week 4: Functions Deep Dive & ES6+**

✅ Focus: Modern JS and deeper understanding of functions.

- ✅ Arrow functions `() => {}`
- ✅ Default parameters
- ✅ Template literals `${}`
- ✅ Destructuring
- ✅ Spread/rest operators `...`
- ✅ Closures
- ✅ Scope – block, function, global
- ✅ Hoisting

📌 **Project**: Quiz app or Rock-Paper-Scissors game

---

## 🗓️ **Week 5: Objects & Arrays Deep Dive**

✅ Focus: Complex data handling

- ✅ Working with nested objects & arrays
- ✅ Object methods
- ✅ Looping through arrays & objects (`for..of`, `for..in`)
- ✅ Array methods: `reduce`, `find`, `some`, `every`, etc.

📌 **Project**: Contact manager or basic e-commerce cart UI

---

## 🗓️ **Week 6: Asynchronous JavaScript**

✅ Focus: Work with async data

- ✅ Callbacks
- ✅ Promises – `.then()`, `.catch()`
- ✅ `async/await`
- ✅ Fetch API
- ✅ JSON parsing & API calls

📌 **Project**: Weather App using OpenWeatherMap API

---

## 🗓️ **Week 7–8: Intermediate Concepts**

✅ Focus: Going deeper with how JS works

- ✅ `this` keyword in different contexts
- ✅ Bind, call, apply
- ✅ Event loop & Call stack
- ✅ Execution context & closures revisited
- ✅ Debounce & Throttle
- ✅ Error handling with `try/catch/finally`

📌 **Project**: Search with debounce, or infinite scroll gallery

---

## 🗓️ **Week 9: Object-Oriented JavaScript**

✅ Focus: Code reusability and structure

- ✅ Factory functions
- ✅ Constructor functions
- ✅ Prototypes
- ✅ ES6 Classes
- ✅ Inheritance

📌 **Project**: Task manager with class-based structure

---

## 🗓️ **Week 10: Advanced JS & Functional Concepts**

✅ Focus: Advanced patterns and clean code

- ✅ Functional programming basics
- ✅ Currying
- ✅ Composition
- ✅ Higher-order functions
- ✅ Recursion

📌 **Project**: Math expression evaluator or recursive menu renderer

---

## 🗓️ **Week 11: Modules & Tooling**

✅ Focus: Project structure and dev tools

- ✅ JavaScript Modules (ESM)
- ✅ Import/export
- ✅ Basic bundlers: Vite/Webpack
- ✅ Babel (what it does)
- ✅ ESLint & Prettier

📌 **Project**: Modularized app with multiple JS files

---

## 🗓️ **Week 12: Final Projects + Testing**

✅ Focus: Pull it all together + intro to testing

- ✅ Unit Testing with Jest (basic)
- ✅ Debugging with DevTools
- ✅ Review and refactor code

📌 **Capstone Project**: Blog, mini chat app, or a weather/news dashboard

---

Want a **PDF version**, **Notion board**, or **GitHub repo template** for this roadmap? I can set one up for you!

## Running the Code

```bash
node index.js
```

## License

ISC
