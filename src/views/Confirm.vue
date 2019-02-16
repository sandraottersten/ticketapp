<template>
  <main id="confirm">
    <header>
      <h3>You're about to score tickets to</h3>
    </header>
    <section class="confirm">
      <article>
        <section>
          <h1>{{activeEvent.name}}</h1>
          <p>{{ this.activeEvent.year }}</p>
          <p>{{ this.activeEvent.city }}</p>
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
          <a href="#" class="btn" @click="$router.push('/ticket')">Take my money</a>
        </section>


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
    margin: 30px;
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
    margin-top: 100px;
  }

  .grid-container > section {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }
h3 {
  text-align: center;
  margin-top: 60px;
}
</style>
