<template>
  <v-card>
    <v-card-title>
      <span class="headline">VFor</span>
    </v-card-title>
    <v-card-text>
      <template v-for="fruit in fruits">
        <p v-bind:key="fruit.name"
           v-bind:class="{ripeFruit: fruit.isRipe}">
          {{fruit.name}}
        </p>
      </template>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'VFor',
  data () {
    return {
      fruits: [
        {name: 'Banana', isRipe: true},
        {name: 'Pear', isRipe: false},
        {name: 'Plum', isRipe: true}
      ]
    }
  }
}
</script>

<style scoped>
  p.ripeFruit {
    color: darkred;
  }
</style>
