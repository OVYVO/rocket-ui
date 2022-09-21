<template>
  <i :class="`ro-icon-${name}`"></i>
</template>

<script>
export default {
  name: 'RoIcon',
  props:{
    name:{
      type: String,
      default: "",
      required: true
    }
  }
};
</script>
