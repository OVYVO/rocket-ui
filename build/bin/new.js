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
  console.log('🚗[组件名]必填')
  process.exit(1)
}

const path = require('path')
// const fs = require('fs')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')

// 获取组件名
const componentName = process.argv[2]
const ComponentName = uppercamelcase(componentName)

const packagePath = path.resolve(__dirname,'../../packages',`${componentName}`)
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
export default {
  name: 'Vue${ComponentName}'
};
</script>
<style lang='less' scoped>
.${componentName}-container:{

}
</style>`
  },
]
files.forEach(file=>{
  fileSave(path.join(packagePath,file.filename))
    .write(file.content, 'utf-8')
    .end('\n')
})
console.log(`👀${componentName}文件夹添加完成`)

// 添加组件文档
const docsComponentsPath = path.resolve(__dirname,'../../docs/components')
fileSave(path.join(docsComponentsPath,`${componentName}.md`))
  .write(JSON.stringify(`# ${componentName}`, null, '  '), 'utf8')
  .end('\n');

console.log(`👀${componentName}.md文档添加完成`)

// 添加到 components.json
const componentsFile = require('../../components.json');
if (componentsFile[componentName]) {
  console.error(`⚠️⚠️⚠️${componentName} 已存在.`);
  process.exit(1);
}
componentsFile[componentName] = {
  "path": `/packages/${componentName}/index.js`,
  "name": `${process.argv[3] ? process.argv[3] : componentName}`
};
fileSave(path.join(__dirname, '../../components.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n');
  
console.log(`👀components.json更新完成`)

console.log(`🔨🔨🔨成功添加${componentName}组件`)