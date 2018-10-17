<template>
  <v-card>

    <v-card-title>
      <span class="headline">
        <code>bindAsObject</code><br>
      </span>
    </v-card-title>

    <v-card-text>
        <v-form>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Name" v-model="fruit.name"></v-text-field>
                  <br>
                  <v-text-field label="Flavor" v-model="fruit.flavor"></v-text-field>
                  <v-switch label="Ripe?" v-model="fruit.ripe"></v-switch>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
    </v-card-text>
    <v-card-actions>
          <v-btn flat @click.native="save">Save</v-btn>
        </v-card-actions>
  </v-card>
</template>

<script>
import { db } from '@/firebase'

export default {
  name: 'FruitOnFire',
  firebase () {
    // Bind fruit variable to fruit_data attribute in firebase
    this.$bindAsObject('fruit', db.ref('fruity_data'))
  },
  methods: {
    save (event) {
      console.log(this.fruit)
      // If nothing exists in firebase it will create an object with a .key and .value attribute.
      // set-method doesn't approve
      delete this.fruit['.key']
      delete this.fruit['.value']
      // Store fruit object in firebase
      this.$firebaseRefs.fruit.set(this.fruit)
    }
  }
}

</script>
