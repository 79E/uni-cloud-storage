import { defineConfig } from 'rollup'
import typescript from 'rollup-plugin-typescript2'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from 'rollup-plugin-json'
import pkg from './package.json'

const isBrowser = process.env.UNICLI_BUILD_TARGET === 'web'

let output = [
  {
    format: 'cjs',
    file: './dist/index.cjs.js',
    isBrowser: false,
    external: [],
  }
]

if(isBrowser){
  output = [
    {
      format: 'umd',
      file: './dist/index.js',
      name: 'UniCloudStorage',
      isBrowser: true,
      external: ['axios','form-data','fs'],
    },
    {
      format: 'esm',
      file: './dist/index.esm.js',
      isBrowser: true,
      external: ['axios','form-data','fs'],
    },
  ]
}

export default defineConfig({
  input: './src/index.ts',
  banner:`
  /**
  * uniCloudStorage js-sdk ${pkg.version}
  * (c) ${new Date().getFullYear()}
  * @license MIT
  */
  `,
  output,
  plugins: [
    typescript(),
    nodeResolve({
      browser: isBrowser,
      preferBuiltins: !isBrowser
    }),
    commonjs(),
    json(),
  ],
  external: [],
})