<template>
  <div class="home">
    <img id="logo" alt="Nosta logo" src="../assets/logo.png">
    <MemberRegistration
      :influencer="$route.params.influencerName || 'Nehaliah'"
      :address="$route.params.influencerId || '0x2C3d88B26728b0b975291FF19b6eFAC0388E9fB9'"
      contract="0x6f92b08b24010da5dd0a9c65a536cc8da1c69d1d"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import MemberRegistration from '../components/MemberRegistration.vue'

export default {
  name: 'Home',
  components: {
    MemberRegistration
  }
}
</script>

<style scoped>
#logo {
  width: 300px;
}
</style>
