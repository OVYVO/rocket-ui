<p align="center">
  <img src="https://ovyvo.github.io/rocket-ui/rocket.png">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/rockets-ui">
    <img src="https://img.shields.io/npm/v/rockets-ui.svg">
  </a>
  <a href="https://npmcharts.com/compare/yan-utils?minimal=true">
    <img src="http://img.shields.io/npm/dm/yan-utils.svg">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/rockets-ui?compression=gzip&label=gzip%20size:%20JS">
    <img src="http://img.badgesize.io/https://unpkg.com/rockets-ui?compression=gzip&label=gzip%20size:%20JS">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/rockets-ui/lib/index.css?compression=gzip&label=gzip%20size:%20CSS">
    <img src="http://img.badgesize.io/https://unpkg.com/rockets-ui/lib/index.css?compression=gzip&label=gzip%20size:%20CSS">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</p>

> 适用于Vue2.0的简易组件库

## 安装
```shell
npm install rockets-ui -S
// or
yarn add rockets-ui -S
// or
cnpm install rockets-ui -S
```

## 快速开始
``` javascript
import Vue from 'vue'
import RocketUI from 'rockets-ui'
import 'rockets-ui/lib/index.css'

Vue.use(RocketUI)

// or
import {
  Statistics
  // ...
} from 'rockets-ui'
import 'rockets-ui/lib/index.css'

Vue.component(Statistics.name, Statistics)
```
