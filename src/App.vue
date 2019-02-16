<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
  /*  beforeMount(){
      this.$store.dispatch('getEvents')
    }*/
  }

</script>

<style>
.btn {
width: 100%;
background: rgb(247, 170, 57);
height: 3.8rem;
border-radius: 3px;
color: white;
text-decoration: none;
font-weight: 600;
text-transform: uppercase;
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
}
.btn:active {
  background: grey;
}
body {
background-color: rgba(255, 230, 132, 1);
font-family: 'Raleway', sans-serif;
}
h1 {
text-align: center;
margin: 30px;
color: rgb(17, 191, 136);
font-size: 3rem;
}
h2 {
font-size: 1.3rem;
text-transform: uppercase;
margin: 0;
flex: 3;
text-shadow: 1px 1px rgb(17, 191, 136);
}
</style>
