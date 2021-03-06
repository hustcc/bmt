import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';

module.exports = [{
  input: 'src/index.ts',
  output: {
    file: 'dist/bmt.min.js',
    name: 'bmt',
    format: 'umd',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    typescript(),
    uglify(),
  ],
}];
