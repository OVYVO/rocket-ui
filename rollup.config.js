// import fs from 'fs'
import path from 'path'
import json from 'rollup-plugin-json'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import { terser } from 'rollup-plugin-terser'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

const isDev = process.env.NODE_ENV !== 'production'

// 公共插件配置
const plugins = [
  vue({
    // Dynamically inject css as a <style> tag
    css: false,
    // Explicitly convert template to render function
    compileTemplate: true
  }),
  json(),
  nodeResolve(),
  commonjs(),
  postcss({
    // 把 css 插入到 style 中
    // inject: true,
    // 把 css 放到和js同一目录
    extract: "index.css",
    plugins: [
      autoprefixer()
    ]
  }),
  babel({
    exclude: 'node_modules/**',
    // 使plugin-transform-runtime生效
    runtimeHelpers: true,
  })
]

// 如果不是开发环境，开启压缩
isDev || plugins.push(terser())

// packages 文件夹路径
const root = path.resolve(__dirname, 'src')

module.exports = {
  input: path.resolve(root, 'index.js'),
  output: [
    {
      exports: 'auto',
      file: path.resolve('dist/components.cjs.js'),
      format: 'cjs' 
    },
    {
      exports: 'auto',
      file: path.resolve('dist/components.es.js'),
      format: 'es'
    },
    {
      format: 'umd',
      file: path.resolve('dist/components.umd.js'),
      name: 'rocket-ui', //打包后的全局变量名称 如：window.YanUi
    } 
  ],
  plugins: plugins
}

