import { createStore } from 'vuex'
import axios from 'axios';

const API_URL = 'https://randomuser.me/api/?results';
const API_RESULTS = 10;

export default createStore({
  state () {
    return {
      people: [],
      selectedPerson: null,
    }
  },
  getters: {
    peopleList(state){
        return state.people;
    },
    person(state){
      return state.selectedPerson;
    }
  },
  mutations: {
    updatePeopleList(state, peopleList){
      state.people = peopleList;
    },
    updateSelectedPerson(state, person){
      state.selectedPerson = person;
    }
  },
  actions: {
    getPeople({commit}){
      axios.get(`${API_URL}=${API_RESULTS}`).then( response => {
        commit('updatePeopleList', response.data.results);
      })
    }
  }
})