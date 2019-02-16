<template>
  <main id= "event">
    <header>
      <h1>EVENTS</h1>
    </header>
    <section>
      <input type="text" name="" value="Search event">
    </section>
    <section class="event">
      <event-item v-for="item in events" :key="item.id" :item="item"/>
      <a href="#" class="btn" @click="saveTicket">Done</a>
    </section>
  </main>
</template>

<script>
import eventItem from '@/components/event-item';

export default {
    name: 'events',
    components: {
      eventItem
    },
    computed: {
      events(){
        return this.$store.state.events;
      },
      activeEvent(){
        return this.$store.state.activeEvent;
      }
    },
    methods: {
      saveTicket(){
        JSON.stringify(this.activeEvent);
        //console.log(this.activeEvent);
        localStorage.setItem('activeEvent', JSON.stringify(this.activeEvent));
        this.$router.push('/confirm')
  }
    }
  }
</script>

<style scoped>

</style>
