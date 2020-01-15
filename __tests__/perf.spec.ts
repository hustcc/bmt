import { createDiv, getData } from './util';
import { Chart } from '@antv/g2';

const data = getData(1000);

describe('bmt', () => {
  test('perf', () => {
    const chart = new Chart({
      container: createDiv(),
      width: 400,
      height: 300,
      autoFit: false,
      padding: [32, 48, 48, 48],
    });

    chart.data(data);

    chart.scale({
      size: {
        alias: 'String length',
      },
      time: {
        alias: 'Measure time (ms)',
      },
    });

    chart
      .line()
      .position('size*time')
      .color('type')
      .shape('smooth');

    chart.legend({
      position: 'top',
    });

    chart.axis('size', {
      title: {},
    });
    chart.axis('time', {
      title: {},
    });

    chart.render();

    expect(1).toBe(1);
  });
});
