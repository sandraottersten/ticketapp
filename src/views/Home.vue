<template>
  <main id="home">
    <section>
      <img src="../assets/logo.png" alt="bthere logo">
    </section>
    <section>
      <h1>BTHERE</h1>
      <h4>ticketing made easy</h4>
    </section>
    <section>
      <a href="#" class="btn" @click="$router.push('/events')">Start</a>
    </section>
  </main>
</template>

<script>


export default {
  name: 'home',
}
</script>

<style scoped>
h4 {
  text-align: center;
}
img {
  width: 30%;
}
</style>
