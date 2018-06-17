const falsyBouncer = require('./../falsyBouncer');

describe('Remove falsy values from array', () => {
  it('lets remove falsy values from input array', () => {
    const arr = ['false', 'a', 'poop', 75, false, 'dog', '', 96, null, 'foo', NaN, 13, true, 0, undefined, 'superman'];
    const exprectArr = ['false', 'a', 'poop', 75, 'dog', 96, 'foo', 13, true, 'superman'];
    expect(falsyBouncer(arr)).toEqual(exprectArr);
  });
});
