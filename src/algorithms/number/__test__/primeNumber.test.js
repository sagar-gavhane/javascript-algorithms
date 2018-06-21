const primeNumber = require('./../primeNumber');

describe('test prime number', () => {
  it('9 prime numbers should be equal to below value', () => {
    const expectedResult = '1 2 3 5 7 9';
    expect(primeNumber(9)).toBe(expectedResult);
  });
});
