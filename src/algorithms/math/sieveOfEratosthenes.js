// Sieve of Eratosthenes
// The Sieve of Eratosthenes is an algorithm for finding all prime numbers up to some limit n.
// It is attributed to Eratosthenes of Cyrene, an ancient Greek mathematician.

const sieveOfEratosthenes = (maxNumber) => {
  // Create a boolean array of n + 1 positions (to represent the numbers 0 through n)
  // Set positions 0 and 1 to false, and the rest to true
  const isPrime = new Array(maxNumber + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  const primes = [];

  for (let number = 2; number <= maxNumber; number += 1) {
    if (isPrime[number] === true) {
      primes.push(number);

      let nextNumber = number * number;
      while (nextNumber <= maxNumber) {
        isPrime[nextNumber] = false;
        nextNumber += number;
      }
    }
  }

  return primes;
};

module.exports = sieveOfEratosthenes;
