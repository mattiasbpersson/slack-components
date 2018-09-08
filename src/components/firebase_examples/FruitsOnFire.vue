<template>
  <v-card>

    <v-card-title>
      <span class="headline">
        <code>bindAsArray</code><br>
      </span>
    </v-card-title>
    <v-card-text>
      <template v-for="fruit in fruits">
        <p v-bind:key="fruit['.key']">
          {{fruit['.value']}}
          <v-btn icon class="mx-0" @click="deleteFruit(fruit)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </p>
      </template>
        <v-form>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Fruit" v-model="fruit"></v-text-field>
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
  name: 'FruitsOnFire',
  data () {
    return {
      fruit: ''
    }
  },
  firebase () {
    // Bind fruits array to fruit_datas attribute in firebase
    this.$bindAsArray('fruits', db.ref('fruity_datas'))
  },
  methods: {
    save (event) {
      console.log(this.fruit)
      // Store fruit object in firebase
      if (this.fruit) {
        this.$firebaseRefs.fruits.push(this.fruit)
      }
    },
    deleteFruit (fruit) {
      console.log(fruit)
      // Delete fruit object in firebase
      this.$firebaseRefs.fruits.child(fruit['.key']).remove()
    }
  }
}

</script>
