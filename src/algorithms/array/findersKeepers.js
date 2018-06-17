// Ref: freecodecamp.org
// Basic Algorithm Scripting: Finders Keepers
// Create a function that looks through an array (first argument)
// and returns the first element in the array that passes a truth
// test (second argument). If no element passes the test, return undefined.

const findersKeepers = (arr, func) => {
  return arr.filter((el) => func(el))[0];
};

module.exports = findersKeepers;
