<template>
  <v-card>
    <v-card-title>
      <span class="headline">
        Child 2
      </span>
    </v-card-title>

    <v-card-text>
      {{ text }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Child2',
  props: {
    text: String
  }
}
</script>

<style scoped>

</style>
