import fs from 'fs'
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
const root = path.resolve(__dirname, 'packages')

module.exports = {
  input: path.resolve(root, 'index.js'),
  output: [
    {
      exports: 'auto',
      file: path.resolve(root, pkg.main),
      format: 'cjs' 
    },
    {
      exports: 'auto',
      file: path.resolve(root, pkg.module),
      format: 'es'
    } 
  ]
}

// module.exports = fs.readdirSync(root)
//   // 过滤，只保留文件夹
//   .filter(item => fs.statSync(path.resolve(root, item)).isDirectory())
//   // 为每一个文件夹创建对应的配置
//   .map(item => {
//     // 获取每个组件包下的package.json文件
//     const pkg = require(path.resolve(root, item, 'package.json'))
//     return {
//       input: path.resolve(root, item, 'index.js'),
//       output: [
//         {
//           exports: 'auto',
//           file: path.resolve(root, item, 'dist/umd/index.js'),
//           format: 'umd',
//           name: 'vueLib' 
//         },
//         {
//           exports: 'auto',
//           file: path.resolve(root, item, pkg.main),
//           format: 'cjs' 
//         },
//         {
//           exports: 'auto',
//           file: path.resolve(root, item, pkg.module),
//           format: 'es'
//         } 
//       ],
//       plugins: plugins
//     }
//   })