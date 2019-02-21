<template>
  <main class="tickets">
    <section class="container">
      <ticket class="tick" v-for="(ticket, index) in tickets" :key="index" :ticket="ticket" />
    </section>
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

.tickets {
  display: flex;
  align-items: center;
  height: 100%;

}
.container {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
 body {
   margin: 0;
 }
 .tick {
   scroll-snap-align: start;
   text-align: center;
   display: flex;
   width: 400px;
   height: 100%;
 }

</style>
