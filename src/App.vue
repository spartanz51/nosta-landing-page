<template>
  <div id="app">
    <img id="logo" alt="Nosta logo" src="./assets/logo.png">
    <MemberRegistration
      influencer="Nehalia"
      address="0x2C3d88B26728b0b975291FF19b6eFAC0388E9fB9"
      contract="0x6f92b08b24010da5dd0a9c65a536cc8da1c69d1d"
    />
  </div>
</template>

<script>
import MemberRegistration from './components/MemberRegistration.vue'

export default {
  name: 'App',
  components: {
    MemberRegistration
  }
}
</script>

<style>

#logo {
  width: 300px;
}

body {
  background-color: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
