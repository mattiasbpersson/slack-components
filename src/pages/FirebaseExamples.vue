<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card color="red lighten-5">

      <v-card-title class="headline">{{ headline }}</v-card-title>

      <v-card-text>
        <FruitOnFire></FruitOnFire>
        <br>
        <FruitsOnFire></FruitsOnFire>
        <br>
        <ComplexFruitsOnFire></ComplexFruitsOnFire>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import FruitOnFire from '../components/firebase_examples/FruitOnFire'
import FruitsOnFire from '../components/firebase_examples/FruitsOnFire'
import ComplexFruitsOnFire from '../components/firebase_examples/ComplexFruitsOnFire'

export default {
  name: 'FirebaseExamples',
  components: {FruitOnFire, FruitsOnFire, ComplexFruitsOnFire},
  data () {
    return {
      headline: 'Some firebase examples'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
