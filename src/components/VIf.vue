<template>
  <v-card>

    <v-card-title>
      <span class="headline">
        <code>v-if</code> and <code>v-show</code>
      </span>
    </v-card-title>

    <v-card-text>

      <!-- v-show example -->
      <p v-show="showPlums && showPeaches">
        <code>v-if</code> re-renders the DOM adding/removing the node from the DOM tree.
        <br/>
        <code>v-show</code> toggles the <code>display</code> attribute of the node instead.
      </p>

      <!-- v-if example -->
      <p v-if="showPlums && showPeaches">Plums and peaches</p>
      <p v-else-if="showPlums">Plums no peaches</p>
      <p v-else-if="showPeaches">Peaches no plums</p>
      <p v-else>No plums or peaches</p>

      <!-- The controls -->
      <v-switch
        label="Plums"
        v-model="showPlums"
      ></v-switch>

      <v-switch
        label="Peaches"
        v-model="showPeaches"
      ></v-switch>

    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'VIf',
  data () {
    return {
      showPlums: true,
      showPeaches: true
    }
  }
}

</script>
