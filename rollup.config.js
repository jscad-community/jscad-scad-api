import * as fs from 'fs'

import terser from '@rollup/plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const { name, version, license } = JSON.parse(fs.readFileSync('package.json'))

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/jscad-scad-api.min.js',
      format: 'umd',
      name: 'jscad-scad-api',
      banner: `/*! ${name} V${version} (${license}) */`
    },
    {
      file: 'dist/jscad-scad-api.es.js',
      format: 'es',
      banner: `/*! ${name} V${version} (${license}) */`
    }
  ],
  plugins: [
    nodeResolve(),
    terser({ compress: { module: true }, mangle: false, format: { comments: 'some' } })
  ]
}
