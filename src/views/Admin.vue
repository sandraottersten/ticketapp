<template>
  <main id="admin">
    <header>
      <h1>ADMIN</h1>
    </header>
    <section class="table fixed_header">
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Where</th>
          <th>When</th>
          <th>Sold tickets</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="event in events" :key="event._id">
          <td>{{event.name }}</td>
          <td>{{event.where.place }}</td>
          <td>{{event.when.date }}</td>
          <td>{{event.tickets.sold }}/{{event.tickets.available }}</td>
        </tr>
        </tbody>
      </table>
    </section>

    <article class="addevent">
      <section class="input-container">
        <h2>New event</h2>
        <input type="text" name="name" placeholder="Name" v-model="newEvent.name">
        <input type="text" name="place" placeholder="Place" v-model="newEvent.where.place">
        <input type="text" name="city" placeholder="City" v-model="newEvent.where.city">
        <input type="text" name="date" placeholder="Date" v-model="newEvent.when.date">
        <input type="number" name="year" placeholder="Year" v-model="newEvent.when.year">
        <input type="text" name="start" placeholder="From" v-model="newEvent.when.from">
        <input type="text" name="stop" placeholder="To" v-model="newEvent.when.to">
        <input type="number" name="tickets" placeholder="Tickets" v-model="newEvent.tickets.available">
      </section>
      <a href="#" class="btn" @click="createEvent">Add the event</a>

    </article>

  </main>
</template>

<script>
  export default {
    name: 'admin',
    data() {
      return {
        newEvent:{
        name:"",
        where: {
          place: "",
          city: ""
        },
        when: {
          year: Number,
          date: "",
          from: "",
          to: ""
        },
        price: Number,
        tickets: {
          available: Number,
          sold: 0
        }
      }
    }
    },
    computed: {
      events(){
        return this.$store.state.events
      }
    },
    methods: {
      async createEvent() {
        let newEvent = this.newEvent
        let resp = await this.$http.post('http://localhost:3000/events', newEvent);
        this.$store.dispatch('getEvents');
      }
    }
  }
</script>

<style scoped>
  #admin {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: white;
    justify-content: flex-end;
    background-image: url('../assets/background.jpg');
    background-size: cover;

  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    margin: 0 auto;
  }

  td, th {
    text-align: left;
  }
  tr {
    height: 2.5rem;
  }

  th {
    border-bottom: 3px solid black;
  }

  td {
    border-bottom: 1px solid black;
  }
  .addevent {
    background: rgba(255, 255, 255, 0.5);
    background-size: 100%;
    font-family: 'Montserrat', sans-serif;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 2;


  }
  .table {
    background-color: rgba(255, 255, 255);
    padding: 10px 30px;
    font-family: 'Montserrat', sans-serif;
    flex: 1;

  }
  .input-container {
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 2rem;
    text-align: center;
  }

  input {
    margin: 8px 8px 8px;
    padding: 10px;
    height: 20px;
  }
  h2 {
    padding: 10px;
  }
  h1 {
    background-color: rgb(254, 113, 33);
    padding: 30px;
    margin: 0;
  }
  .fixed_header{
      table-layout: fixed;
      border-collapse: collapse;
  }

  .fixed_header tbody{
    display:block;
    width: 100%;
    overflow: auto;
    height: 250px;
  }

  .fixed_header thead tr {
     display: block;
  }

  .fixed_header th, .fixed_header td {
    padding: 5px;
    text-align: left;
    width: 200px;
  }
  .btn {
    width: 300px;
  }
</style>
