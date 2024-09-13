/**
 * Memoization in Javascript
 */


function memoize(func) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
        return cache[key];
      } else {
        const result = func(...args);
        cache[key] = result;
        return result;
      }
    };
  }
  
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  const memoizedFactorial = memoize(factorial);
  
  console.log(memoizedFactorial(5)); // Computes and caches result for 5
  console.log(memoizedFactorial(5)); // Returns cached result directly