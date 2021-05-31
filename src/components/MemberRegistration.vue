<template>
  <div class="hello">
    <h1>{{ influencer }}</h1>
    <h2>{{ address }}</h2>
    <p>Metamask:
      <span style="color: red;" v-if="!account">Non connecté</span>
      <span v-else>{{account}}</span>
    </p>
    <div v-if="ready">
      <button v-if="registrationAvailable" @click="register">S'inscrire avec cet influenceur</button>
      <span v-else>Already registered with influencer {{registeredInfluencer}}</span>
    </div>
    <div v-else>
      <span>Loading...</span>
    </div>
  </div>
</template>

<script>
const sc = require('../libs/sc')

export default {

  name: 'MemberRegistration',
  props: {
    influencer: String,
    address: String,
    contract: String,
    account: String,
    registeredInfluencer: String,
    registrationAvailable: Boolean,
    ready: Boolean
  },
  async mounted() {
    const account = await sc.load(this.contract)
    if(account) {
      this.account = account
      this.checkInfluencer()
    }
    window.ethereum.on('accountsChanged', accounts => {
      this.account = accounts[0]
      this.checkInfluencer()
    })
  },
  methods: {
    register() {
      sc.register(this.address)
      this.registrationAvailable = false
    },
    async checkInfluencer() {
      const influencer = await sc.getInfluencer(this.account)
      if(influencer === "0x0000000000000000000000000000000000000000") {
        this.registrationAvailable = true
      }else{
        this.registeredInfluencer = influencer
        this.registrationAvailable = false
      }
      this.ready = true
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
  font-size: 18px;
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
