const euclideanAlgorithm = require('./euclideanAlgorithm');

const leastCommonMultiple = (num1, num2) => {
  if (num1 === 0 && num2 === 0) return 0;

  return Math.abs(num1 * num2) / euclideanAlgorithm(num1, num2);
};

module.exports = leastCommonMultiple;
