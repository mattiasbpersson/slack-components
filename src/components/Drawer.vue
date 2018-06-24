<template>
  <v-navigation-drawer app temporary v-model="isOpen">
    <v-list class="pt-0" dense>

      <v-list-tile @click="logAndCloseDrawer('show text message creation component!')">
        <v-list-tile-action>
          <v-icon>'create'</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>text message</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {

  name: 'Drawer',

  model: {
    prop: 'drawerOpen',
    event: 'toggleDrawerOpen'
  },

  props: {
    drawerOpen: Boolean
  },

  data () {
    return {isOpen: this.drawerOpen}
  },

  watch: {
    // Propagate changes down
    drawerOpen (b) {
      this.isOpen = b
    },
    // Propagate changes up
    isOpen (b) {
      this.$emit('toggleDrawerOpen', b)
    }
  },
  methods: {
    logAndCloseDrawer (message) {
      console.log(message)
      this.isOpen = false
    }
  }
}
</script>

<style scoped>

</style>
