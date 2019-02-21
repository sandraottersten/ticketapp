<template>
  <main id="verify">
      <header>
          <h1>VERIFY</h1>
      </header>
    <section class="content">
        <section class="verification" v-show="show">
            <h2>{{ verification }}</h2>
        </section>
        <section class="form" v-show="show">
            <img v-if="verify==true" src="../assets/thumbsup.png" alt="thumb up">
            <img v-if="verify==false" src="../assets/thumbsdown.png" alt="thumb up">
        </section>
        <div>
          <input type="text" name="code" placeholder="Write code here" :value="code.toUpperCase()" @input="code = $event.target.value.toUpperCase()" :maxlength="codeLength" />
          <a href="#" class="btn" @click="verifyTicket">Verify code</a>
        </div>
     </section>
  </main>
</template>

<script>
export default {
  name: 'verify',
  data(){
    return {
        code: '',
        codeLength: 5,
        show: false,
        verify: false
    }
  },
  computed: {
      verification(){
          return this.$store.state.verifyData;
      },
},
  methods: {
    async verifyTicket(){
          await this.$store.dispatch('verifyTicket', this.code);
          if(this.verification == "Ticket is valid"){
            this.verify = true
          }else{
            this.verify = false
          }
          this.show = true;
          console.log(this.verify)
          console.log(this.verification.verified)
      }
   }
}
</script>
<style>

  #verify {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: rgba(255, 255, 255, 0.5);

  }
  header {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
  .verification {
    margin: auto;
    font-size: 1.2rem;
    font-style: italic;
    padding: 2rem;
    text-align: center;
  }
  h1 {
    padding: 20px;
    margin: 0;
  }
  header {
    background-color: rgb(254, 113, 33);
  }

  img {
    width: 50%;
    margin: 0 auto;
    padding-top: 80px;
  }
  .form {
    width: 100vw;
    height: 21rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: flex-end;
  }
  input {
    height: 5rem;
    font-size: 1.5rem;
    letter-spacing: .25rem;
    text-align: center;
    appearance: none;
    border: none;
    background-color: white;
    width: 100vw;
  }
  input:focus {
    outline: none;
  }
  .verify {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    font-weight: 700;
    text-decoration: none;
  }


</style>
