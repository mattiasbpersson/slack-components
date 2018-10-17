<template>
  <v-card>

    <v-card-title>
      <span class="headline">
        <code>bindAsArray - data objects</code><br>
      </span>
    </v-card-title>
    <v-card-text>
      <v-data-table :headers="headers" :items="fruits" hide-actions class="elevation-1">
        <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item['.key']}}</td>
          <td class="text-xs-left">{{ props.item.flavor }}</td>
          <td class="text-xs-left">{{ props.item.ripe }}</td>
          <td class="text-xs-left">{{ props.item.editor }}</td>
          <td class="justify-center layout px-0">
            <v-btn icon class="mx-0" @click="editFruit(props.item)">
              <v-icon color="green">edit</v-icon>
            </v-btn>
            <v-btn icon class="mx-0" @click="deleteFruit(props.item)">
              <v-icon color="pink">delete</v-icon>
            </v-btn>
          </td>
        </template>
        <template slot="no-data">
          <v-alert :value="true" color="error" icon="warning">
            No fruits found
          </v-alert>
        </template>

      </v-data-table>
      <br>
      <v-form>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Name" v-model="new_fruit_name"></v-text-field>
                <v-text-field label="Flavor" v-model="new_fruit.flavor"></v-text-field>
                <v-switch label="Ripe?" v-model="new_fruit.ripe"></v-switch>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
    </v-card-text>
    <v-card-actions>
          <v-btn flat @click.native="save">Add/Update</v-btn>
        </v-card-actions>
  </v-card>
</template>

<script>
import { db, firebaseApp } from '@/firebase'

export default {
  name: 'ComplexFruitsOnFire',
  data () {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Flavor', value: 'flavor' },
        { text: 'Ripe', value: 'ripe' },
        { text: 'Editor', value: 'editor' }
      ],
      new_fruit_name: '',
      new_fruit: {
        flavor: '',
        ripe: false
      }
    }
  },
  firebase () {
    // Bind fruits array to fruit_datas attribute in firebase
    this.$bindAsArray('fruits', db.ref('complex_fruity_datas'))
  },
  methods: {
    save (event) {
      console.log(this.fruit)

      // Store fruit object in firebase
      // Specify key as name
      if (this.new_fruit && this.new_fruit_name) {
        this.new_fruit.editor = firebaseApp.auth().currentUser.displayName
        this.$firebaseRefs.fruits.child(this.new_fruit_name).set(this.new_fruit)
      }
    },
    deleteFruit (fruit) {
      console.log(fruit)
      // Delete fruit object in firebase
      this.$firebaseRefs.fruits.child(fruit['.key']).remove()
    },
    editFruit (fruit) {
      console.log(fruit)
      // Set attributes from fruit-data to new_fruit-data
      this.new_fruit_name = fruit['.key']
      this.new_fruit.flavor = fruit.flavor
      this.new_fruit.ripe = fruit.ripe
    }
  }
}

</script>
