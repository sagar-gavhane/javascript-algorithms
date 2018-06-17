const largestNumbersInArrays = require('./../largestNumbersInArrays');

describe('Array test', () => {
  it('Largest numbers in arrays', () => {
    const arr = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
    const res = largestNumbersInArrays(arr);
    expect(res).toEqual([27, 5, 39, 1001]);
  });
});
