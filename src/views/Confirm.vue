<template>
  <main id="confirm">
    <header>
      <h1>BEET IT</h1>
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
          {{ this.activeEvent.price * this.counter }} :-
        </section>
        <section @click="addNumber(1)" class="plus">
          +
        </section>
        <section class="antal">
          {{counter}}
        </section>
        <section @click="removeNumber(1)" class="minus">
          -
        </section>
        </article>

        </section>
        <a href="#" class="btn" @click="$router.push('/ticket')">Take my money</a>

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
      addNumber(number){
        this.$store.commit('addNumber', number);
      },
      removeNumber(number){
        this.$store.commit('removeNumber', number);
      }
    }
  }
</script>

<style scoped>
  .confirm {
    text-align: center;
    margin: 0px 25px 25px;
    background-color: white;
  }
  #confirm {
    display: flex;
    flex-direction: column;
  }
  .pris {
    grid-area: header;
    height: 50px;
  }
  .plus { grid-area: menu; }
  .antal { grid-area: main; }
  .minus { grid-area: right; }


  .grid-container {
    display: grid;
    grid-template-areas:
      'header header header header header header'
      'menu menu main main right right'
   ;
    grid-gap: 2px;
    padding: 10px;
    margin: 60px 30px 50px;
  }

  .grid-container > section {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
    border: 3px solid rgb(232, 74, 116);
  }
h1 {
  text-align: center;
  margin: 0;
  background-color: rgb(34, 155, 84);
  padding: 25px;
}
h2 {
  color: black;
  margin: 30px 0px 30px;
  font-size: 2rem;
  text-transform: uppercase;
}
h4 {
  font-family: 'Montserrat', sans-serif;
  color: rgb(232, 74, 116);
}
p {
  margin: 0;
  font-style: italic;
}
</style>
