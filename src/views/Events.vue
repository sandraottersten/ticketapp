<template>
  <main id= "event">
    <header>
      <h1>EVENTS</h1>
    </header>
    <section id="input">
      <input type="text" name="search" placeholder="filter">
    </section>
    <section class="event scrolling-box">
      <event-item v-for="item in events" :key="item.id" :item="item"/>
    </section>
    <a href="#" class="btn" @click="saveTicket">Done</a>
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
  input {
    height: 1.8rem;
    width: 20rem;
    margin: .8rem;
    border-radius: 3px;
    border: none;
    font-size: 1.2rem;
    padding: .5rem;
  }
  input:focus {
    outline: none;
  }
  #event {
    background-color: white;
    display: flex;
    flex-direction: column;
  }
  .event {
    margin: 0 20px;
  }
  .scrolling-box {
    display: block;
    overflow-y: scroll;
    height: 440px;
  }
  header {
    background-color: rgb(34, 155, 84);
  }
  #input {
    background-color: rgb(48, 180, 92);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    margin-bottom: 0;
    margin-top: 0;
    padding: 20px;

  }
</style>
