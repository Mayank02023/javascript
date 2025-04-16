/**
 * Debounce and Throttle:— two incredibly useful techniques for optimizing performance, especially when working with events like
 *                         scrolling, resizing, typing, or clicking.
 *
 * These techniques control how often a function is allowed to run, which can prevent apps from lagging or overloading.
 *
 * 🧠 The Problem
 *      - Say you attach a scroll or input event to a function — it might trigger dozens or hundreds of times per second!
 *      - You don’t always need the function to run that frequently, and it can kill performance.
 *
 *    That’s where debouncing and throttling step in.
 *
 * 1. 🧠 Debounce:— "Wait until they stop"
 *      - Debounce ensures that a function is only executed after a specified delay has passed since the last time it was called.
 *      - This is useful for scenarios where you want to execute a function only after the user has stopped typing or scrolling.
 *
 * Note:- Delays execution of a function until after a specified time has passed since the last time it was called.
 *
 *
 * ✅ Use when:
 *      - You only care about the final event (e.g., user stopped typing).
 *      - You want to limit rapid function calls into just one call at the end.
 */

function searchQuery(query) {
  console.log("Searching for:", query);
}

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const debouncedSearch = debounce(searchQuery, 500);

document.getElementById("search").addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});

/**
 * 📦 What happens:
 *      - User types: h, he, hel, hell, hello
 *      - searchQuery() is called once after 500ms of inactivity.
 */

/**
 * 2️⃣ 🧠 Throttle — "Wait every X ms"
 *
 *      - Throttle ensures that a function is executed at most once within a specified time interval.
 *      - This is useful for scenarios where you want to limit the frequency of a function's execution.
 *
 * Note:- Ensures a function is only called once every fixed interval, no matter how many times
 *        the event is triggered.
 *
 * ✅ Use when:
 *      - You care about regular updates but not too frequent.
 *      - Like scroll, window resize, or drag events.
 */

// 💡 Real-world example: Scroll position tracker

function handleScroll() {
  console.log("Scroll position:", window.scrollY);
}

function throttle(func, interval) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}

const throttledScroll = throttle(handleScroll, 300);

window.addEventListener("scroll", throttledScroll);

/**
 * 📦 What happens:
 *      - Even if you scroll rapidly, handleScroll() runs every 300ms, not constantly.
 * 
 * 🔁 Debounce vs Throttle
 * 
 *      Feature        | Debounce                               | Throttle
 * --------------------|----------------------------------------|-------------------
 *      Behavior       | Fires after user stops interacting     | Fires at regular intervals
 *      Use case       | Autocomplete, resizing, form input     | Scroll, resize, mouse movement
 *      Rate           | Only after delay                       | At max one per interval
 *      Control flow   | Wait, then run                         | Run, wait, repeat
 * 
 * 
 * 🧠 Memory Aware Versions (Using setTimeout or requestAnimationFrame)
 *      - You can also debounce or throttle using requestAnimationFrame() for smoother 
 *          animation-related optimizations.
 * 
 * 
 * ✅ Pro Tips
 *      Use debounce for:
 *          1. Search boxes
 *          2. Text input
 *          3. Window resizing
 *          4. Form validation
 *          5. Auto-saving drafts
 *      Use throttle for:
 *          1. Scroll listeners
 *          2. Mouse move tracking
 *          3. Game loop updates
 *          4. Drag-and-drop UI
 * 
 */

/**
 * Bonus: Lodash Utilities 🛠️:- If you use lodash, it provides battle-tested _.debounce() 
 *                               and _.throttle() methods:
 * 
 */

const _ = require("lodash");

const debouncedFn = _.debounce(searchQuery, 500);
const throttledFn = _.throttle(handleScroll, 300);