import { measureTextByDOM, measureTextByCanvas } from '../src';

const font = {
  fontFamily: 'sans-serif',
  fontSize: 16,
};

describe('bmt', () => {
  test('measureTextByDOM', () => {
    expect(measureTextByDOM('hello world', font)).toBe(80);
  });

  test('measureTextByCanvas', () => {
    expect(Math.abs(measureTextByCanvas('hello world', font) - 80)).toBeLessThanOrEqual(1);
  });
});
