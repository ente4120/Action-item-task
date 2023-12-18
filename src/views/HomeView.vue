<script setup>
</script>

<template>
  <div>
    <v-form>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="nameFilter"
              label="Filter By Name"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="countryFilter"
              label="Filter by Country"
            ></v-text-field>
          </v-col>
        </v-row>
    </v-form>
    <v-table height="600px">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Country</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, key) in filteredPeople" :key="key">
            <td> <img :src="person.picture.thumbnail"/> </td>
            <td> {{ person.name.title }} {{ person.name.first }} {{ person.name.last }}</td>
            <td> {{ person.gender }} </td>
            <td> {{ person.location.country }} </td>
            <td> {{ person.phone }} </td>
            <td> {{ person.email }} </td>
            <td> <v-btn color="primary" variant="text"  @click="selectPerson(person)">Edit</v-btn> </td>
          </tr>
        </tbody>
      </v-table>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex';

  export default {
    name: 'HomeView',
    created() {
      if(!this.peopleList.length){
        this.getPeople();
      }
    },
    data() {
      return {
        nameFilter: '',
        countryFilter: '',
      }
    },
    methods: {
      ...mapActions(['getPeople']),
      ...mapMutations(['updateSelectedPerson']),
      selectPerson(person){
        this.updateSelectedPerson(person);
        this.$router.push('/person')
      }
    },
    computed: {
      ...mapGetters(['peopleList']),
      filteredPeople() {
        let filteredList = this.peopleList.slice();
        if(!!this.nameFilter){
          filteredList = filteredList.filter((person) => person.name.title.includes(this.nameFilter) || person.name.first.includes(this.nameFilter) || person.name.last.includes(this.nameFilter));
        }
        if(!!this.countryFilter){
          filteredList = filteredList.filter((person) => person.location.country.includes(this.countryFilter));
        }
        return filteredList;
      }
    },
  }
</script>