import banner from 'rollup-plugin-banner'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/jscad-scad-api.min.js',
      format: 'umd',
      name: 'jscad-scad-api'
    },
    {
      file: 'dist/jscad-scad-api.es.js',
      format: 'es'
    }
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    terser({ compress: { module: true }, mangle: false, format: { comments: 'some' } })
  ]
}
