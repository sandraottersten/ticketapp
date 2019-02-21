<template>
  <article class="event-item" @click="chooseEvent(item)">
    <section id="date">
      {{item.when.date}} <br> {{item.when.year}}
    </section>
    <section class='section'>
      <h3>{{item.name}} <span id="soldout" v-show="show">SOLD OUT!</span></h3>
      <p id="normal-text">{{item.where.place}} - {{item.where.city}}</p>
      <p>{{item.when.start}} - {{item.when.end}}</p>
    </section>
    <section id="price">
      {{ item.price }} sek
    </section>
  </article>
</template>

<script type="text/javascript">
  export default {
      name: 'event-item',
      props: ['item'],
      computed: {
        show(){
        if(this.item.tickets.available-this.item.tickets.sold==0){
        return true
      } else {return false}
    }
      },
      methods: {
        chooseEvent(item){
          this.$store.commit('chooseEvent', item);
          this.$router.push('/confirm')
        }
      }
    }
</script>

<style scoped>
  .event-item {
    display: flex;
    border-bottom: 1px solid gray;
    padding: .5rem;
    margin-bottom: .125rem;
  }
  .event-item:active {
    background-color: gray;
  }
  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }
  .event-item:focus {
    background-color: grey;
  }
  p {
    padding: 0;
    margin: 0;
    color: rgb(0, 0, .6);
    font-size: .8rem;
  }
  #date {
    box-sizing: border-box;
    border: 1px solid rgb(200, 33, 15);
    padding: 10px 5px 15px 5px;
    margin-right: 10px;
    text-align: center;
    width: 70px;
    height: 60px;
    color: rgb(200, 33, 15);
  }
  #normal-text {
    font-family: arial;
    font-style: italic;
  }
  #price {
    padding-top: 45px;
  }
  h3 {
    text-transform: uppercase;
    margin-bottom: 1rem;
    margin-top: 0;
    font-size: .9rem;
  }
  #soldout {
    background: red;
    color: white;
    padding: 2px;
  }
</style>
