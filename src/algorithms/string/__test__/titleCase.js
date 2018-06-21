const titleCase = require('./../titleCase');

describe('Test title case', () => {
  it('should be convert any string into title string', () => {
    const str = 'Lorem, ipsum dolor.';
    expect(titleCase(str)).toBe('Lorem, Ipsum Dolor.');
  });

  it('should be return empty string', () => {
    expect(titleCase('')).toBe('');
  });
});
