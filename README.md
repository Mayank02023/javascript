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

## Running the Code

```bash
node index.js
```

## License

ISC
