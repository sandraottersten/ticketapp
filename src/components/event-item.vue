<template>
  <article class="event-item" @click="chooseEvent(item)">
    <section id="date">
      {{item.when.date}} <br> {{item.when.year}}
    </section>
    <section class='section'>
      <h2>{{item.name}}</h2>
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
      methods: {
        chooseEvent(item){
          this.$store.commit('chooseEvent', item);
          console.log('hej')
        }
      }
        }
</script>

<style>
  .event-item {
    display: flex;
    border-bottom: 1px solid rgb(247, 170, 57);
    padding: .5rem;
    margin-bottom: .125rem;
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
    border: 1px solid rgb(247, 170, 57);
    padding: 15px 5px 15px 5px;
    margin-right: 10px;
    text-align: center;
    width: 80px;
    height: 70px;
  }
  #normal-text {
    font-family: arial;
    font-style: italic;
  }
  #price {
    padding-top: 50px;
  }



</style>
