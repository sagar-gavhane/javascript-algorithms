const truncateString = require('./../truncateString');

describe('Truncate a String', () => {
  it('truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".', () => {
    const str = 'A-tisket a-tasket A green and yellow basket';
    expect(truncateString(str, 8)).toEqual('A-tisket...');
  });

  it('yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".', () => {
    const str = 'A-tisket a-tasket A green and yellow basket';
    expect(truncateString(str, str.length + 2));
  });

  it('truncateString("A-", 1) should return "A...".', () => {
    expect(truncateString('A-', 1)).toBe('A...');
  });
});
