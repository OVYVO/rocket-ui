###### 准备工作

> 注意:使用 lerna 开发工具库需要区分不同的 packages,需要用到 yarn 工作区，所以推荐使用 yarn

```javascript
// package.json文件设置，开启工作区
"private": true,
"workspaces": [
	"./packages/*"
]
```

工作区根目录安装依赖举例: yarn add xxx -W
指定工作区安装依赖举例: yarn workspace xxx add xxx
所有工作区安装依赖: yarn install

###### rollup 打包

指定工作区打包举例: yarn workspace xxx run build
所有工作区打包举例: yarn build

###### 运行 storybook

```javascript
yarn storybook
```
