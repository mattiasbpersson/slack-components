<template>
  <v-card>

    <v-card-title>
      <span class="headline">
        <code>db.ref</code><br>
      </span>
    </v-card-title>
    <v-card-text>
      <template v-for="fruit in fruits">
        <p v-bind:key="fruit['.key']">
          {{fruit.name}}
          <v-btn icon class="mx-0" @click="deleteFruit(fruit)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </p>
      </template>
        <v-form>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Fruit" v-model="fruit.name"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
    </v-card-text>
    <v-card-actions>
          <v-btn flat @click.native="save">Add</v-btn>
        </v-card-actions>
  </v-card>
</template>

<script>
import { db } from '@/firebase'
var fruityRef = db.ref('fruity_datas')
export default {
  name: 'FruitsOnFire',
  data () {
    return {
      fruit: {name: ''}
    }
  },
  firebase: {
    fruits: fruityRef
  },
  methods: {
    save (event) {
      console.log(this.fruit)
      // Store fruit object in firebase
      if (this.fruit) {
        fruityRef.push(this.fruit)
      }
    },
    deleteFruit (fruit) {
      console.log(fruit)
      // Delete fruit object in firebase
      fruityRef.child(fruit['.key']).remove()
    }
  }
}

</script>
