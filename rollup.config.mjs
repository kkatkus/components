
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import external from 'rollup-plugin-peer-deps-external';

import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: "dist/cjs/index.js",
        format: 'cjs',
        sourcemap: true,
        name: 'components',
      },
      {
        file: "dist/esm/index.js",
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['axios'],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      json(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  }
];
