<template>
  <main id="admin">
    <header>
      <h1>ADMIN</h1>
    </header>
    <article class="table fixed_header">
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
        <tr v-for="event in events" :key="event.id">
          <td>{{event.name }}</td>
          <td>{{event.where.place }}</td>
          <td>{{event.when.date }}</td>
          <td>{{event.tickets.sold }}/{{event.tickets.available }}</td>
        </tr>
        </tbody>
      </table>
    </article>

    <article class="addevent">
      <h2>Add event</h2>
      <section class="input-container">
        <input type="text" name="" placeholder="Name">
        <input type="text" name="" placeholder="Where">
        <input type="text" name="" placeholder="Date">
        <input type="text" name="" placeholder="From time">
        <input type="text" name="" placeholder="To time">
        <input type="text" name="" placeholder="#Seats">
      </section>
      <a href="#" class="btn">Add the event</a>
    </article>
  </main>
</template>

<script>
  export default {
    name: 'admin',
    computed: {
      events(){
        return this.$store.state.events
      }
    }
  }
</script>

<style scoped>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    text-align: left;
  }

  th {
    border-bottom: 3px solid black;
  }

  td {
    border-bottom: 1px solid black;
  }
  .addevent {
    background-image: url('../assets/background.jpg');
    background-size: 100%;
    text-align: center;
    font-family: 'Montserrat', sans-serif;

  }
  .table {
    margin: 0 auto;
    background-color: rgba(255, 255, 255);
    padding: 10px;
    font-family: 'Montserrat', sans-serif;
  }
  .input-container {
    margin: 0 auto;
    display: inline-block;
  }
  #admin {
    height: 100vh;
  }
  input {
    margin: 10px 0px 10px;
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
    height: 200px;
  }

  .fixed_header thead tr {
     display: block;
  }

  .fixed_header th, .fixed_header td {
    padding: 5px;
    text-align: left;
    width: 200px;
  }
</style>
