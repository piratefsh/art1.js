const { Art1, array, print, init, stringify } = require('../src/art1');

describe('array', () => {
  it('should return 2D array of length', () => {
    const c = array(10, 8);
    expect(c.length).toBe(8); //num of rows
    expect(c[0].length).toBe(10); //num of cols
  });
});

describe('init', () => {
  it('should fill canvas', () => {
    const c = init({width: 4,
      height: 3,
      symbol1: '-',
      ncol: 1,
      symbol2: '"',
      mcol: 1});

    const pattern1 = '----'
    const pattern2 = '""""'
    expect(c.a1).toEqual([
      pattern1.split(''),
      pattern1.split(''),
      pattern1.split('')]);
    expect(c.a2).toEqual([
      pattern2.split(''),
      pattern2.split(''),
      pattern2.split('')]);
  });

  it('should fill canvas with alternating', () => {
    const c = init({width: 4,
      height: 3,
      symbol1: '-',
      ncol: 2,
      symbol2: 'x',
      mcol: 3});

    const pattern1 = '- - '
    const pattern2 = 'x  x'
    expect(c.a1).toEqual([
      pattern1.split(''),
      pattern1.split(''),
      pattern1.split('')]);
    expect(c.a2).toEqual([
      pattern2.split(''),
      pattern2.split(''),
      pattern2.split('')]);
  });
});