<template>
  <main id="ticket">
    <section class="grid-container">
        <section class="item1">
          <img src="../assets/blogo.png" alt="Bthere" @click="$router.push('/events')">
          <h1>{{ticket.event.name}}</h1>
        </section>
        <section class="item2">
          <h3>{{ticket.event.where.place}}</h3>
          <h3>{{ticket.event.where.city}}</h3>
        </section>
        <section class="item3">
          <p>Day<br>{{ticket.event.when.date}}</p>
        </section>
        <section class="item4">
          <p>From<br>{{ticket.event.when.start}}</p>
        </section>
        <section class="item5">
          <p>To<br>{{ticket.event.when.end}}</p>
        </section>
        <section class="item6">
          <p>{{ticket.event.info}}</p>
        </section>
        <section class="item7">
          <p class="barcode"> {{ticket.code}}</p>
          <p class="utfcode">#{{ticket.code}}</p>
        </section>
      </section>
  </main>
</template>

<script>
  export default {
    name: 'ticket',
    props: ['ticket']
  }
</script>

<style scoped>
  #ticket {
  width: 100%;
  height: 100%;
  }
.item1 {
  grid-area: name;
  background-color: rgba(255, 255, 255, 0.2);
}
.item2 {
  grid-area: where;
  background-color: rgba(255, 255, 255, 0.4);
}
.item3 {
  grid-area: date;
  background-color: rgba(255, 255, 255, 0.6);
}
.item4 {
  grid-area: to;
  background-color: rgba(255, 255, 255, 0.6);
}
.item5 {
  grid-area: from;
  background-color: rgba(255, 255, 255, 0.6);
}
.item6 {
  grid-area: info;
  background-color: rgba(255, 255, 255, 0.8);
}
.item7 {
  grid-area: barcode;
  background-color: rgba(255, 255, 255, 1);
}

.grid-container {
  display: grid;
  grid-template-areas:
  'name name name name name name'
  'where where where where where where'
  'date date to to from from'
  'info info info info info info'
  'barcode barcode barcode barcode barcode barcode';
grid-gap: 2px;
  padding: 2px;
    width: 400px;
}

.grid-container > section {
  text-align: center;
  padding: 20px 0;

}
.utfcode {
    margin: -1.5rem 0 0 0;
    padding: 0;
    color: rgba(0, 0, 0, .6);
    letter-spacing: .25rem;
}

.barcode {
    font-family: 'Libre Barcode 128', cursive;
    margin: 1rem 0 0 0;
    padding: 0;
    font-size: 5rem;
    font-weight: 100;
    color: black;
}
h1 {
    margin: 0;
    padding: 0 0 1rem 0;
    font-size: 2rem;
    text-transform: uppercase;
  }
h3 {
  margin: 5px;
}
img {
  width: 20%;
  margin-bottom: 10px;
}
</style>
