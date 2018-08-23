function factorial(number) {
  let result = 1;

  for (let i = 2; i <= number; i++) {
    result *= i;
  }

  return result;
}

/* Functional programming styled factorial algorithm */
const natural = n => {
  const arr0 = [...Array(n + 1).keys()];
  const [first, ...arr] = arr0;
  return arr;
};

function factorialFunctional(number) {
  const list = number < 1 ? [1] : natural(number);
  const multiply = (a, b) => a * b;
  return list.reduce(multiply);
}

module.exports = factorial;
