<template>
  <div>
    <v-btn variant="text" @click="backHome()">Back</v-btn>
    <v-sheet width="400" class="mx-auto">
      <form>
        <img :src="person.picture.large"/>

        <v-text-field
          v-model="person.gender"
          label="Gender"
        ></v-text-field>

        <v-text-field
          v-model="fullName"
          label="Name [title, first name, last name]"
        ></v-text-field>

        <v-text-field
          v-model="ageAndDate"
          label="Age [age, date]"
        ></v-text-field>

        Address:
        <v-text-field
          v-model="fullAddress"
          label="Street [adress number, adress name]"
        ></v-text-field>

        <v-text-field
          v-model="person.location.city"
          label="City"
        ></v-text-field>

        <v-text-field
          v-model="person.location.country"
          label="State"
        ></v-text-field>

        Contact: 
        <v-text-field
          v-model="person.email"
          label="Email"
        ></v-text-field>

        <v-text-field
          v-model="person.phone"
          label="Phone"
        ></v-text-field>
      </form>
    </v-sheet>
  </div>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex';

  export default {
    name: 'PersonView',
    methods: {
      ...mapMutations(['updateSelectedPerson']),
      updatePerson(){
        this.updateSelectedPerson(this.person);
      },
      backHome(){
        this.$router.push('/')
      }
    },
    computed: {
      ...mapGetters(['person']),
      fullName: {
        get() {
          return `${this.person.name.title} ${this.person.name.first} ${this.person.name.last}`
        }, 
        set(newValue) {
          const splitedName = newValue.split(' ');
          this.person.name.title = splitedName[0] ? splitedName[0] : '';
          this.person.name.first = splitedName[1] ? splitedName[1] : '';
          this.person.name.last = splitedName[2] ? splitedName[2] : '';
        }
      },
      ageAndDate: {
        get() {
          return `${this.person.registered.age}, ${this.person.registered.date}`
        }, 
        set(newValue) {
          const splitedName = newValue.split(', ');
          this.person.registered.age = splitedName[0];
          this.person.registered.date = splitedName[1];
        }
      },
      fullAddress: {
        get() {
          return `${this.person.location.street.number}, ${this.person.location.street.name}`
        }, 
        set(newValue) {
          const splitedAddress = newValue.split(', ');
          this.person.location.street.number = splitedAddress[0];
          this.person.location.street.name = splitedAddress[1];
        }
      }
    }
  }
</script>
