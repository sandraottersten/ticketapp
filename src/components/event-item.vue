<template>
  <article class="event-item">
    <section>
      <h1>{{item.name}}</h1>
      <p>{{item.startTime}} - {{item.endTime}}</p>
      <p>{{item.place}} - {{item.city}}</p>
    </section>
    <section>
      {{ item.price }} sek
    </section>
  </article>
</template>

<script type="text/javascript">
  export default {
      name: 'event-item',
      props: ['item']
        }
</script>

<style>
  .event-item {
    display: flex;
    border: 1px solid grey;
    border-radius: 3px;
    padding: .5rem;
    margin-bottom: .125rem;
  }
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
  }
        h1 {
          font-size: 1rem;
          text-transform: uppercase;
          margin: 0;
          flex: 3;
        }

        p {
          padding: 0;
          margin: 0;
          color: rgb(0, 0, .6);
          font-size: .8rem;
        }



</style>
