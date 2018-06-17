const findersKeepers = require('./../findersKeepers');

describe('Finders Keepers', () => {
  it('findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.', () => {
    const arr = [1, 3, 5, 8, 9, 10];
    const func = (num) => num % 2 === 0;
    expect(findersKeepers(arr, func)).toBe(8);
  });

  it('findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.', () => {
    const arr = [1, 3, 5, 9];
    const func = (num) => num % 2 === 0;
    expect(findersKeepers(arr, func)).toBeUndefined();
  });
});
