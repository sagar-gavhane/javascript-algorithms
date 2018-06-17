const largestNumbersInArrays = (arr) => {
  return arr.map((el) => Math.max(...el));
};

module.exports = largestNumbersInArrays;
