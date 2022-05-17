<template>
  <div class="home">
    <logo />
    <router-link to="/Login">
      <button type="button" class="btn btn-lg btn-success">Entrar</button>
    </router-link>
  </div>
</template>

<script>
import Logo from "@/components/Logo/Logo.vue" 

export default {
  components: {
    Logo
  },
  name: 'HomeView',
}
</script>

<style>
.home{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
}
</style>