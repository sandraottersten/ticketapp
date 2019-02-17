<template>
  <main id="home">
    <section class="content">
      <img src="../assets/blogo.png" alt="Where its @" @click="$router.push('/events')">
      <h1>BTHERE</h1>
      <hr>
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
  margin: .2rem;
}
img {
  width: 30%;
}
hr {
  width: 100px;
  color: rgb(232, 74, 116);
  height:2px;
  border-width:0;
  background-color:rgb(232, 74, 116);
}
</style>
