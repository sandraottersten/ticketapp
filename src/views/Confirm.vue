<template>
  <main id="confirm">
    <header>
      <h1>You're about to score some tickets to</h1>
    </header>
    <section class="confirm">
      <article>
        <section>
          <h1>namn</h1>
          <p>datum</p>
        </section>
      </article>
      <article class="service">
        <section>
          <h1>Pris</h1>
        </section>
        <section>
          Antal
        </section>
        </article>
        </section>
    <a href="#" class="btn" @click="$router.push('/ticket')">Take my money</a>

  </main>
</template>

<script>
  export default {
    name: 'confirm'
  }
</script>

<style media="screen">

</style>
