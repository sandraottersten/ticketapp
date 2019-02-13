<template>
  <main id="admin">
    <header>
      <h1>Admin</h1>
    </header>
    <article class="table">
      <table>
        <tr>
          <th>Name</th>
          <th>Where</th>
          <th>Places</th>
          <th>Sold tickets</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr>
      </table>
    </article>

    <article class="addevent">
      <h1>Add event</h1>
      <section class="input-container">
        <input type="text" name="" value="Name">
        <input type="text" name="" value="Where">
        <input type="text" name="" value="Date">
        <input type="text" name="" value="From time">
        <input type="text" name="" value="To time">
        <input type="text" name="" value="#Seats">
      </section>
      <a href="#" class="btn" @click="">Add the event</a>
    </article>
  </main>
</template>

<script>
  export default {
    name: 'admin'
  }
</script>

<style media="screen">
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    text-align: left;
    padding: 8px;
  }

  th {
    border-bottom: 3px solid black;
  }

  td {
    border-bottom: 1px solid black;
  }

  .addevent {

    background-color: pink;
    text-align: center;

  }
  .table {
    margin: 0 auto;
    background-color: lightblue;
    padding: 10px;
  }
  .input-container {
    margin: 0 auto;
    display: inline-block;
  }
  #admin {
    padding: 30px;
  }
</style>
