<template>
  <v-card>
    <v-card-title>
      <span class="headline">
        Child 1
      </span>
    </v-card-title>

    <v-card-actions>

      <v-text-field
        label="Write something..."
        :value="text"
        @input="$emit('textChanged', $event)"
      ></v-text-field>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Child1',
  props: {
    text: String
  }
}
</script>

<style scoped>
</style>
