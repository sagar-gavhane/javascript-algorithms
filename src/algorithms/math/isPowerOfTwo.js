const isPowerOfTwo = (number) => {
  if (number <= 0) return false;

  if (number <= 1) return false;

  // Let's find out if we can divide the number by two
  // many times without remainder.
  let dividedNumber = number;
  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) {
      // For every case when remainder isn't zero we can say that this number
      // couldn't be a result of power of two.
      return false;
    }

    dividedNumber /= 2;
  }

  return true;
};

module.exports = isPowerOfTwo;
