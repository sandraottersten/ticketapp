import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
events: [{
  id: 1,
  name: 'laleh',
  place: 'globen',
  city: 'stockholm',
  date: 2019,
  startTime: 20,
  endTime: 21,
  price: 234,
  seats: 200
},
{
  id:2,
  name: 'silent disco',
  place: 'ullevi',
  city: 'göteborg',
  date: 2019,
  startTime: 21,
  endTime: 22,
  price: 599,
  seats: 600
}]}
  ,
  mutations: {

  },
  actions: {

  }
})
