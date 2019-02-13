<template>
  <main id="ticket">
    <section class="grid-container">
        <section class="item1">
          <h1>namn</h1>
        </section>
        <section class="item2">
          <h3>Plats</h3>
        </section>
        <section class="item3">
          <p>Datum</p>
        </section>
        <section class="item4">
          <p>Start</p>
        </section>
        <section class="item5">
          <p>Slut</p>
        </section>
        <section class="item6">
          <p>Seat</p>
        </section>
        <section class="item7">
          Barcode
        </section>
      </section>
  </main>
</template>

<script>
  export default {
    name: 'ticket'
  }
</script>

<style>
.item1 { grid-area: head; }
.item2 { grid-area: header; }
.item3 { grid-area: menu; }
.item4 { grid-area: main; }
.item5 { grid-area: right; }
.item6 { grid-area: footer; }
.item7 { grid-area: foot; }

.grid-container {
  display: grid;
  grid-template-areas:
  'head head head head head head'
    'header header header header header header'
    'menu main main main right right'
    'footer footer footer footer footer footer'
      'foot foot foot foot foot foot';
  background-color: blue;
  padding: 10px;
margin: 100px 20px 40px 20px;

}

.grid-container > section {
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

.item3 {
  border: 5px dotted black
}

#ticket {
  

}
</style>
