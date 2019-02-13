<template>
  <main id="confirm">
    <header>
      <h1>You're about to score some tickets to</h1>
    </header>
    <section class="confirm">
      <article>
        <section>
          <h1>namn</h1>
          <p>datum och tid</p>
          <p>plats</p>
        </section>
      </article>
      <article class="service grid-container">
        <section class="pris">
          <h1>Pris</h1>
        </section>
        <section class="plus">
          +
        </section>
        <section class="antal">
          Antal
        </section>
        <section class="minus">
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
      events(){
        return this.$store.state.events;
      }
    }
  }
</script>

<style media="screen">
  .confirm {
    background-color: pink;
  }

  .service {
    background-color: green;
  }

  .pris { grid-area: header; }
  .plus { grid-area: menu; }
  .antal { grid-area: main; }
  .minus { grid-area: right; }


  .grid-container {
    display: grid;
    grid-template-areas:
      'header header header header header header'
      'menu main main main right right'
   ;
    grid-gap: 10px;
    background-color: #2196F3;
    padding: 10px;
  }

  .grid-container > section {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }

</style>
