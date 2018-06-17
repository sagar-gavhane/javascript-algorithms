const chunk = require('./../chunk');

describe('Make chunk from array', () => {
  it('convert array to chunk of chunksize 1', () => {
    expect(chunk(['a', 'b', 'c', 'd', 'e'], 1)).toEqual([['a'], ['b'], ['c'], ['d'], ['e']]);
  });

  it('convert array to chunk of chunk size 2', () => {
    expect(chunk(['a', 'b', 'c', 'd', 'e'], 2)).toEqual([['a', 'b'], ['c', 'd'], ['e']]);
  });

  it('convert array to chunk of chunk size 3', () => {
    expect(chunk(['a', 'b', 'c', 'd', 'e'], 3)).toEqual([['a', 'b', 'c'], ['d', 'e']]);
  });
});
