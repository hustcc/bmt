import { measureTextByDOM, measureTextByCanvas } from '../src';

const font = {
  fontFamily: 'sans-serif',
  fontSize: 16,
};

describe('bmt', () => {
  test('measureTextByDOM', () => {
    expect(measureTextByDOM('hello world', font)).toBeLessThanOrEqual(100);
  });

  test('measureTextByCanvas', () => {
    expect(measureTextByCanvas('hello world', font)).toBeLessThanOrEqual(100);
  });
});
