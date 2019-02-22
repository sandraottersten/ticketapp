<template>
  <main id= "event">
    <header>
      <h1>EVENTS</h1>
    </header>
    <section id="input">
      <input type="text" v-model="search" placeholder="find event">
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
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .event {
    margin: 0;
  }
  .scrolling-box {
    display: block;
    overflow-y: scroll;
    height: 510px;
    background: rgb(255, 255, 255);
    width: 100vw;

  }
  #input {
    background: rgba(255, 255, 255, 0.5);
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
