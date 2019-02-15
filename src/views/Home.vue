<template>
  <main id="home">
    <section>
      <img src="../assets/logo.png" alt="Slice logo">
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

</style>
