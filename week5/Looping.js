/**
 * 🏛️ 1. Looping: how (for...of) and (for...in) work in JavaScript, especially when you're looping through arrays and objects.
 */

// 🎯 1. for...of — Loop over values (arrays, strings, etc.)

// ✅ Use it for: arrays, strings, Sets, Maps, etc.

// for arrays 
const numbers = [1, 2, 3];
for (const num of numbers) {
  console.log(num);
}

// for strings 
const str = `Prince Kurmi`;
for(const char of str){
    console.log(char);
}

// for objects 
const person = { name: "John", age: 30 };
for (const key in person) {
  console.log(key, person[key]);
}

// for set
const set = new Set([1, 2, 3]);
for (const num of set) {
  console.log(num);
}

// for map
const map = new Map([['a', 1], ['b', 2]]);
for (const [key, value] of map) {
  console.log(key, value);
}

// 🔎 2. for...in — Loop over keys (object properties)

// ✅ Use it for: objects, arrays, strings

// for objects
const personobject = { name: "John", age: 30 };
for (const key in personobject) {
  console.log(key, personobject[key]);
}

// for arrays
const numbersarray = [1, 2, 3];
for (const index in numbersarray) {
  console.log(index, numbersarray[index]);
}

// for strings
const string = `Prince Kurmi`;
for (const index in string) {
  console.log(index, string[index]);
}