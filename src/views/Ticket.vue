<template>
  <main id="ticket">
    <section class="grid-container">
        <section class="item1">
          <h1>{{ticket.name}}</h1>
        </section>
        <section class="item2">
          <h3>{{ticket.place}}</h3>
        </section>
        <section class="item3">
          <p>Datum</p>
        </section>
        <section class="item4">
          <p>{{ticket.startTime}}</p>
        </section>
        <section class="item5">
          <p>{{ticket.endTime}}</p>
        </section>
        <section class="item6">
          <p>Seat</p>
        </section>
        <section class="item7">
          <p id="barcode-font">90876</p>
        </section>
      </section>
  </main>
</template>

<script>
  export default {
    name: 'ticket',
    beforeMount() {
        this.$store.dispatch('checkLocalStorage')
    },
    computed: {
      ticket(){
      return this.$store.state.ticket
    }
    }
  }
</script>

<style scoped>
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
grid-gap: 2px;
  padding: 2px;
margin: 100px 20px 40px 20px;

}

.grid-container > section {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
}

.item7 {
 font-family: 'Libre Barcode 128', cursive;
 font-size: 130px;
 padding-top: 20px;
}

#barcode-font {
margin:20px;
padding-top: 50px;

}
</style>
