<template>
  <v-card>

    <v-card-title>
      <span class="headline">
        <code>v-bind</code>
      </span>
    </v-card-title>

    <v-card-text>
      <p>
        <code>v-bind</code> is used to set a property of a sub-component. Below are 3 instances of the same component with different properties.
      </p>
      <template v-for="fruit in fruits">
        <FruityItem v-bind:fruit="fruit" v-bind:key="fruit.name"></FruityItem>
        <!--
        The 'v-bind' syntax can be dropped giving the ':fruit="fruit"' shorthand.
        The bound value is available as a property (prop) of the sub-component (See FruityItem's props object).
        -->
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
