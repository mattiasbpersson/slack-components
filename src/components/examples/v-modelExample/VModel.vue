<template>
<v-card>
  <v-card-title class="headline">
    <code>v-model</code>
  </v-card-title>
  <v-card-text>
    Using <code>v-model</code> with custom compontent. <br/>
    Two-way data-binding is achieved with <code>v-model</code> the subcompontent models the bound property and updates it by emitting a signal.
    <br/>
    <p class="data">{{fruit.name}} is {{fruit.isRipe ? 'ripe' : 'not ripe'}}.</p>
  </v-card-text>
  <v-card-actions>
    <FruitEditor v-model="fruit"/>
    <FruitEditor v-model="fruit"/>
  </v-card-actions>
</v-card>
</template>

<script>
import FruitEditor from './FruitEditor'
export default {
  name: 'VModel',
  components: {FruitEditor},
  data () {
    return {
      fruit: {name: 'Banana', isRipe: false}
    }
  }
}
</script>

<style scoped>
.data{
  font-weight: bold;
}
</style>
