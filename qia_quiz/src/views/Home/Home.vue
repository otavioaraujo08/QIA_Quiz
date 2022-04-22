<template>
  <div class="home">
      <h1>Olá mundo</h1>
    <logo />
    <button type="button" class="btn btn-lg btn-success">Entrar</button>
  </div>
</template>

<script>

import Logo from "../../components/Logo/Logo.vue"
import "./Styles.css"

export default {
  components: {
    Logo
  },
  name: 'HomeView',
}
</script>
