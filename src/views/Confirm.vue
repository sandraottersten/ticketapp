<template>
  <main id="confirm">
    <header>
      <h1>BUY</h1>
    </header>
      <article class="event">
        <section>
          <h2>{{activeEvent.name}}</h2>
          <h4>{{ activeEvent.when.date }} {{ activeEvent.when.year }}</h4>
          <p>{{ activeEvent.where.place }}</p>
          <p>{{ activeEvent.where.city }}</p><br>
          <p v-show="!show">Tickets remaining: {{ activeEvent.tickets.available - activeEvent.tickets.sold }}</p>
          <p id="soldout" v-show="show">SOLD OUT!</p>
        </section>
      </article>
      <article v-show="!show" class="grid-container">
        <section class="price">
          {{ this.activeEvent.price * this.counter }}:-
        </section>
        <section @click="removeNumber(1)" class="minus">
          -
        </section>
        <section class="number">
          {{counter}}
        </section>
        <section @click="addNumber(1)" class="plus">
          +
        </section>
        </article>
        <a href="#" v-show="!show" class="btn" @click="buy">Take my money</a>
        <a href="#" v-show="show" class="btn" @click="$router.push('/events');">Back to events</a>
  </main>
</template>

<script>
export default {
  name: 'confirm',
  computed: {
    activeEvent(){
      return this.$store.state.activeEvent;
    },
    counter(){
      return this.$store.state.counter;
    },
    show(){
    if(this.activeEvent.tickets.available-this.activeEvent.tickets.sold==0){
    return true
  } else {return false}
}
  },
  methods: {
    buy(){
      this.$store.dispatch('buy', { event: this.activeEvent._id, amount: this.counter });
      this.$router.push('/tickets');
    },
    addNumber(number){
      this.$store.dispatch('addNumber', number);
    },
    removeNumber(number){
      this.$store.dispatch('removeNumber', number);
    }
  }
}
</script>

<style scoped>

#confirm {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-end;
}

.event {
  text-align: center;
  margin: 0px 0px 0px;
  background-color: white;
  flex-direction: column;
  flex:1;
  background-color: white;

}

.price { grid-area: price; }
.plus { grid-area: right; }
.number { grid-area: number; }
.minus { grid-area: left; }

.grid-container {
  display: grid;
  grid-template-areas:
  'price price price price price price'
  'left left number number right right';
  grid-gap: 2px;
  margin: 0px;
  background-image: url('../assets/background.jpg');
  background-size: 100%;
  text-align: center;
}

.grid-container > section {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 30px 0;
  font-size: 40px;
}

header {
}

h1 {
  text-align: center;
  margin: 0;
  padding: 20px;
}

h2 {
  color: black;
  margin: 50px 0px 30px;
  font-size: 2rem;
  text-transform: uppercase;
}

h4 {
  font-family: 'Montserrat', sans-serif;
  color: gray;
}

p {
  margin: 0;
}

#soldout {
  color: red;
  font-weight: bold;
  font-size: 2rem;
}
</style>
