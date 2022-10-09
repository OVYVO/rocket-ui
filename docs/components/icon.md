#### 基础用法

> 常用图标集合

::: demo

```vue
<template>
  <div class="icon-list-demo">
    <i class="ro-icon-close"></i>
    <i class="ro-icon-setting"></i>
    <i class="ro-icon-edit"></i>
    <i class="ro-icon-delete"></i>
  </div>
</template>
```

:::

#### 图标集合

<ul class="icon-list">
  <li v-for="icon in $icon" :key="icon.icon_id">
    <span>
      <i :class="'ro-icon-' + icon.font_class"></i>
      <span class="icon-name">{{'ro-icon-' + icon.font_class}}</span>
    </span>
  </li>
</ul>

