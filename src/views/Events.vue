<template>
  <main id= "event">
    <header>
      <h1>Events</h1>
    </header>
    <section class="event">
      <event-item v-for="item in events" :key="item.id" :item="item"/>
      <a href="#" class="btn" @click="$router.push('/confirm')">Done</a>
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
      }
    }
  }
</script>

<style>

</style>
