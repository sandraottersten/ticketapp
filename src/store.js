import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [],
    activeEvent: {},
    counter: 1,
    tickets: [],
    verifyData: null,
    msg:""
  },
mutations: {
  chooseEvent(state, item){
    state.activeEvent = item;
  },
  setTickets(state, tickets){
    state.tickets = tickets;
},
  addNumber(state, number){
    state.counter += number;
  },
  removeNumber(state, number){
    state.counter -= number;
  },
  setEvents(state, events){
    state.events = events;
  },
  setVerifyData(state, data){
    state.verifyData = data;
  }
},
actions: {
  async buy(ctx, buyData){
    let tickets = await axios.post('http://localhost:3000/tickets', buyData);
    ctx.commit('setTickets', tickets.data);
    localStorage.setItem('tickets', JSON.stringify(tickets.data));

  },
  async getEvents(ctx){
    let events = await axios.get('http://localhost:3000/events');
    ctx.commit('setEvents', events.data);
  },
  getTickets(ctx){
    let tickets = localStorage.getItem('tickets');
    ctx.commit('setTickets', JSON.parse(tickets));
  },
  async verifyTicket(ctx, code){
    let verification = await axios.get(`http://localhost:3000/verify/${code}`);
    ctx.commit('setVerifyData', verification.data);
  }
}
})
