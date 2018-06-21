/**
 * A prime number is a natural number greater than 1 that cannot be formed by multiplying
 * two smaller natural numbers. A natural number greater than 1 that is not prime
 * is called a composite number.
 * @param {int} number
 */
const primeNumber = (number) => {
  const result = [];

  for (let i = 1; i <= number; i += 1) {
    let count = 0;

    const foo = i / 2;
    for (let j = 2; j <= foo; j += 1) {
      if (foo % j === 0) {
        count += 1;
        break;
      }
    }

    if (count === 0 && number !== 1) {
      result.push(i);
    }
  }

  return result.join(' ');
};

module.exports = primeNumber;
