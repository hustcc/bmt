import { measureTextByCanvas, measureTextByDOM } from '../src';

export function getData(max: number) {
  const data = [];

  function generateString(n) {
    return new Array(n).fill('a').join('');
  }

  const FONT = { fontFamily: 'arial', fontSize: 12 };

  for (let i = 1; i < max; i++) {
    const s = generateString(i);

    // DOM
    let start = performance.now();
    measureTextByDOM(s, FONT);
    data.push({
      size: i,
      time: performance.now() - start,
      type: 'dom',
    });

    // canvas
    start = performance.now();
    measureTextByCanvas(s, FONT);
    data.push({
      size: i,
      time: performance.now() - start,
      type: 'canvas',
    });
  }

  data.filter((d) => d !== 0);

  return data;
}

export function createDiv() {
  const div = document.createElement('div');
  document.body.appendChild(div);

  return div;
}
