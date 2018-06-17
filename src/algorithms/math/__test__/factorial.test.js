const factorial = require('./../factorial');

describe('Find out factorial of input number', () => {
  it('Factorial of 1! = 1', () => {
    expect(factorial(0)).toBe(1);
  });
});
