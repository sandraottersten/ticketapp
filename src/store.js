import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [],
    activeEvent: {},
    counter: 1,
    ticket: {},
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
  },
  checkLocalStorage(state, tick){
    state.ticket = tick;
  },
  setEvents(state, events){
    state.events = events;
  }
},
actions: {
  checkLocalStorage(ctx){
  if(localStorage.getItem('activeEvent')){
    let mick = localStorage.getItem('activeEvent');
    let tick = JSON.parse(mick)
    ctx.commit('checkLocalStorage', tick);
    } else {
    console.error('Det finns ingen data');
    }
  },
async getEvents(ctx){
  let events = await axios.get('http://localhost:3000/events');
  console.log(events.data)
  ctx.commit('setEvents', events.data);
  }
}
})
