<template>
  <main class="tickets">
      <ticket class="tick" v-for="(ticket, index) in tickets" :key="index" :ticket="ticket" />
  </main>
</template>

<script>

import ticket from '@/components/ticket';

export default {
  name: 'tickets',
  components: {
      ticket
  },
  computed: {
      tickets(){
          return this.$store.state.tickets;
      }
  },
  beforeMount(){
      if(localStorage.getItem('tickets')){
          this.$store.dispatch('getTickets');
      }
  }
}
</script>

<style scoped>
#app {

}
 .tickets {
   display: flex;
   padding-top: 3rem;
   overflow-x: scroll;
   align-items: center;
 }
 body {
   margin: 0;
 }
 .tick {
   min-width: 21rem;
   width: 100vw;
 }

</style>
