<template>
  <v-card>
    <v-card-title>
      <span class="headline">VBind</span>
    </v-card-title>
    <v-card-text>
      <template v-for="fruit in fruits">
        <FruityItem v-bind:fruit="fruit" v-bind:key="fruit.name"></FruityItem>
      </template>
    </v-card-text>
  </v-card>
</template>

<script>

import FruityItem from './FruityItem'

export default {
  name: 'VModel',
  components: {FruityItem},
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

</style>
