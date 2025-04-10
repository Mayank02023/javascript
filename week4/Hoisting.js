/*
 * Hoisting:- Hoisting is JavaScript's default behavior of moving declarations to the top of their scope (global or function)
 *            during the compilation phase, before the code is executed.
 * 
 * This means variables and function declarations can be used before they are declared, but with some caveats.
 */

// 👇 Example – Variable Hoisting with var:

console.log(x); // undefined
var x = 10;

/* ✅ JS sees it like:

var x;
console.log(x); // undefined
x = 10;

*/

/*
 * They're in a "Temporal Dead Zone" (TDZ) — you can’t access them before the declaration line.🔁 Hoisting Basics
 * In JavaScript, variable declarations (with var, let, and const) are hoisted — meaning the declaration is moved to the top of the scope during the compile phase.
 * 
 * But there's a catch with let and const... :- 🚫 let and const are also hoisted but not initialized:
 * 
 * ❗The "Temporal Dead Zone" (TDZ)
 *  Variables declared with let and const are hoisted, but not initialized. Between the start of the scope and the actual declaration line, 
 *  they exist in a "temporal dead zone" (TDZ). Accessing the variable during this zone throws a ReferenceError.
 */

console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 20; // i removed this line then i will get the ReferenceError: y is not defined

// Here's how JavaScript interprets it:

// Hoisting happens like this:
let y1; // hoisted declaration (but NOT initialized)

console.log(y1); // 🚨 ReferenceError: TDZ
y1 = 20;         // ✅ Initialization

/*
 * 
 * 🛠️ How to avoid TDZ errors:
 * - Use `var` for variables that need hoisting (if you must)
 * - Use `const` for constants (it's less likely to cause issues)
 * - Use `let` for variables that need to be re-assigned
 * - Initialize variables before using them
 * - Use tools like ESLint to catch TDZ errors
 */


// ✅ Function Declarations are Fully Hoisted:

sayHi(); // ✅ "Hello!"

function sayHi() {
  console.log("Hello!");
}

// But ⚠️ Function Expressions are NOT hoisted like declarations:

sayBye(); // ❌ TypeError: sayBye is not a function

var sayBye = function () {
  console.log("Bye!");
};

// Only the variable sayBye is hoisted (as undefined), not the function itself.(It is treated as a variable not function)

/*
 * Declaration Type     | Hoisted?      | Initialized?      | Accessible before line?
 * ---------------------|----------------|-------------------|------------------------
 * 
 *    var               |    ✅         |   undefined       |  ✅ (but value is undefined)
 * 
 *    let/const         |    ✅         |      ❌          |    ❌ (TDZ error)
 * 
 *    Fn Declaration    |    ✅         |      ✅          |    ✅
 * 
 *    Fn Expression     |    ✅         |      ❌          |    ❌
 * 
 */
