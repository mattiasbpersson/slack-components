<template>
  <p v-bind:key="fruit.name"
     v-bind:class="{ripeFruit: fruit.isRipe}">
    {{fruit.name}}
  </p>
</template>

<script>
export default {
  name: 'FruityItem',
  props: {
    fruit: Object
  }
}

</script>

<style scoped>
  p.ripeFruit {
    color: darkred;
  }
</style>
