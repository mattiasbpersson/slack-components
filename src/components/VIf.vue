<template>
  <v-card>
    <v-card-title>
      <span class="headline">VIf</span>
    </v-card-title>
    <v-card-text>
      <p v-if="showPlums && showPeaches">Plums and peaches</p>
      <p v-else-if="showPlums">Plums no peaches</p>
      <p v-else-if="showPeaches">Peaches no plums</p>
      <p v-else>No plums or peaches</p>
      <p v-show="showPlums && showPeaches">Html display:none if no plums and peaches</p>
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
