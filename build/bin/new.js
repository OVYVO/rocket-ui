/*
 * 添加新组件
**/

'use strict'

// 监听异常退出
process.on('exit',()=>{
  console.log('')
})

// 判断组件名是否必填
if(!process.argv[2]){
  console.log('[组件名]必填')
  process.exit(1)
}

const path = require('path')
// const fs = require('fs')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')

// 获取组件名
const componentName = process.argv[2]
const ComponentName = uppercamelcase(componentName)
// 获取路径
const packagePath = path.resolve(__dirname,'../../packages',`vue-${componentName}`)

const files = [
  // index.js
  {
    filename: 'index.js',
    content:
`import ${ComponentName} from './src/main.vue'

${ComponentName}.install = Vue => {
  Vue.component(${ComponentName}.name, ${ComponentName})
}

export default ${ComponentName}`
  },
  // src/main.vue
  {
    filename: 'src/main.vue',
    content: 
`<template>
  <div class="${componentName}-container"></div>
</template>

<script>
import './main.css'
export default {
  name: 'Vue${ComponentName}'
};
</script>`
  },
  // src/main.css
  {
    filename: 'src/main.css',
    content: 
`.${componentName}-container{
  
}`
  },
  // src/Component.stories.js
  {
    filename: `src/${ComponentName}.stories.js`,
    content: 
`import ${ComponentName} from './main.vue';

export default {
  title: '${ComponentName}',
  component: ${ComponentName},
  argTypes: {
    //type: {
    //  control: {
    //    type: 'inline-radio',
    //    options: ['primary', 'error', 'warning', 'success']
    //  }
    //}
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ${ComponentName} },
  template: '<${componentName} v-bind="$props"/>'
});

export const Primary = Template.bind({});
Primary.args = {

};`
  },
  // package.json
  {
    filename: `package.json`,
    content:
`{
  "name": "@yan/vue-${componentName}",
  "version": "0.0.1",
  "description": "",
  "main": "dist/cjs/index.js",
  "module": "dist/es/index.js",
  "scripts": {
    "test": "echo /\"Error: no test specified/\" && exit 1",
    "del": "rimraf dist"
  },
  "keywords": [
    "vue-${componentName}"
  ],
  "author": "vue12306@163.com",
  "license": "MIT",
  "gitHead": "fb325af9bfaca1d35a42a338250e1edab24a45ea"
}
`
  },
  // LICENSE.md
  {
    filename: `LICENSE.md`,
    content:
`MIT License

Copyright (c) [2022][vue-${componentName}]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
  }
]

files.forEach(file=>{
  fileSave(path.join(packagePath,file.filename))
    .write(file.content, 'utf-8')
    .end('\n')
})

console.log(`🔨🔨🔨add ${componentName} success!`)
