<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    beforeMount(){
      this.$store.dispatch('getEvents')
    }
  }

</script>

<style>
.btn {
width: 100%;
background: rgb(231, 46, 18);
height: 3.8rem;
border-radius: 3px;
color: white;
text-decoration: none;
font-weight: 600;
text-transform: uppercase;
display: flex;
justify-content: center;
align-items: center;

}
.btn:active {
  background: grey;
}
body {
background-image: url('assets/background.jpg');
background-size: cover;
background-position: center;
font-family: arial;
margin: 0;
height: 100vh;
width: 100vw;
}
#app {
  height: 100vh;
}
h1 {
text-align: center;
color: white;
font-family: 'Kodchasan', sans-serif;
font-weight: bold;
font-size: 3rem;
}
h2 {
font-size: 1.3rem;
text-transform: uppercase;
margin: 0;
flex: 3;
}
P {
font-family: 'Montserrat', sans-serif;
}

</style>
