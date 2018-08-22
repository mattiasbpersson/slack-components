<template>
<v-card>
  <v-card-actions>
    <v-text-field label="Name" :value="fruit.name" @input="nameUpdated"/>
    <v-switch label="Ripeness" :input-value="fruit.isRipe" @change="isRipeUpdated"/>
  </v-card-actions>
</v-card>
</template>

<script>
export default {
  name: 'FruitEditor',
  model: {
    prop: 'fruit',
    event: 'change'
  },
  props: {
    fruit: Object
  },
  methods: {
    nameUpdated (event) {
      this.$emit('change', {...this.fruit, name: event})
    },
    isRipeUpdated (event) {
      this.$emit('change', {...this.fruit, isRipe: event})
    }
  }
}
</script>

<style scoped>

</style>
