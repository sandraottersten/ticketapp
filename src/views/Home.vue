<template>
  <main id="home">
    <section class="content">
        <img src="../assets/blogo.png" alt="Where its @" @click="$router.push('/events')">
        <h1>BTHERE</h1>
        <h4>ticketing made easy</h4>
    </section>
  </main>
</template>

<script>


export default {
  name: 'home',
}
</script>

<style scoped>
  #home {
    display: flex;
    flex-direction: column;

  }
  .content {
    flex: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 40%;

  }
  h1 {
    margin: 0;
  }
h4 {
  text-align: center;
  margin: .1rem;
  color: white;
}
img {
  width: 30%;
}


</style>
