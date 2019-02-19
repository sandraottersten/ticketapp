<template>
  <main id="confirm">
    <header>
      <h1>BUY</h1>
    </header>
    <section class="confirm">
      <article>
        <section>
          <h2>{{activeEvent.name}}</h2>
          <h4>{{ activeEvent.when.date }} {{ activeEvent.when.year }}</h4>
          <p>{{ activeEvent.where.place }}</p>
          <p>{{ activeEvent.where.city }}</p>
        </section>
      </article>
      <article class="grid-container">
        <section class="pris">
          {{ this.activeEvent.price * this.counter }}:-
        </section>
        <section @click="removeNumber(1)" class="minus">
          -
        </section>
        <section class="antal">
          {{counter}}
        </section>
        <section @click="addNumber(1)" class="plus">
          +
        </section>
        </article>

        </section>
        <a href="#" class="btn" @click="buy">Take my money</a>

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

      }
    },
    methods: {
      buy(){
      this.$store.dispatch('buy', { event: this.activeEvent._id, amount: this.counter });
      this.$router.push('/tickets');
    },
      addNumber(number){
        this.$store.commit('addNumber', number);
      },
      removeNumber(number){
        this.$store.dispatch('removeNumber', number);
      }
    }
  }
</script>

<style scoped>
  .confirm {
    text-align: center;
    margin: 0px 0px 0px;
    background-color: white;
  }
  #confirm {
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 100vh;
  }
  .pris {
    grid-area: header;
  }
  .plus { grid-area: right;}
  .antal { grid-area: main; }
  .minus { grid-area: left; }


  .grid-container {
    display: grid;
    grid-template-areas:
      'header header header header header header'
      'left left main main right right'
   ;
    grid-gap: 2px;

    margin: 50px 0px 0px;
    widht: 100%;
    background-image: url('../assets/background.jpg');
    background-size: 100%;
  }

  .grid-container > section {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 40px 0;
    font-size: 40px;

  }
h1 {
  text-align: center;
  margin: 0;
  background-color: rgb(254, 113, 33);
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
  font-style: italic;
}
</style>
