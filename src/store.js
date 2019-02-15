import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
events: [{
  id: 1,
  name: 'laleh',
  place: 'globen',
  city: 'stockholm',
  date: '20 mars',
  startTime: 20,
  endTime: 21,
  price: 234,
  seats: 200,
  year: 2019
},
{
  id:2,
  name: 'silent disco',
  place: 'ullevi',
  city: 'göteborg',
  date: '9 dec',
  startTime: 21,
  endTime: 22,
  price: 599,
  seats: 600,
  year: 2019
}],
activeEvent: {},
counter: 0
},
  mutations: {
    chooseEvent(state, item){
    state.activeEvent = item;
},
addNumber(state, number){
state.counter += number;
},
removeNumber(state, number){
state.counter -= number;
}
  },
  actions: {

  }
})
