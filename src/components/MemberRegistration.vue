<template>
  <div class="hello">
    <h1>{{ influencer }}</h1>
    <h2>{{ address }}</h2>
    <button @click="register">S'inscrire avec cet influenceur</button>
  </div>
</template>

<script>
const sc = require('../libs/sc')

export default {

  name: 'MemberRegistration',
  props: {
    influencer: String,
    address: String,
    contract: String
  },
  async mounted() {
    await sc.load(this.contract)
  },
  methods: {
    register() {
      sc.register(this.address)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: white;
}

h2 {
  color: white;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button {
  background-color: #19b5fe;
  color: white;
  font-size: 22px;
  border: 0px;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
}
</style>
