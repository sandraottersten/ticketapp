import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

events: [
  {
    name: "laleh",
    price: 699,
    place: "globen",
    city: "stockholm",
    startTime: 20,
    endTime: 22,
    date: "20 jan"
},
{
  name: "cher",
  price: 699,
  place: "ullevi",
  city: "göteborg",
  startTime: 20,
  endTime: 22,
  date: "8 okt"
}
],
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
/*
setEvents(state, events){
  state.events = events;
}
*/
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
}/*,
async getEvents(ctx){
  let events = await axios.get('http://localhost:3000/events');
  console.log(events)
  ctx.commit('setEvents', events.data);
}*/
  }
})
