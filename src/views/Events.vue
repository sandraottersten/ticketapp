<template>
  <main id= "event">
    <header>
      <h1>EVENTS</h1>
    </header>
    <section id="input">
      <input type="text" v-model="search" placeholder="filter">
    </section>
    <section class="event scrolling-box">
      <event-item v-for="item in filteredEvents" :key="item.id" :item="item"/>
    </section>
  </main>
</template>

<script>
import eventItem from '@/components/event-item';

export default {
    name: 'events',
    data(){
      return {
        search: ""
      }
    },
    components: {
      eventItem
    },
    computed: {
      events(){
        return this.$store.state.events;
      },
      filteredEvents(){
        return this.events.filter((event) => {
          return event.name.match(this.search);
        })
      }
    }
  }
</script>

<style scoped>
  input {
    height: 1.5rem;
    width: 19rem;
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
    height: 500px;
  }
  header {
    background-color: rgb(254, 113, 33);
  }
  #input {
    background-color: lightgray;
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
