<template>
  <div class="teacher">
    <logo />
    <h3>Bem vindo, professor</h3>
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
      <input type="password" class="form-control" placeholder="Insira a sua senha">
      <span class="input-group-text"><i class="fa-solid fa-eye-slash"></i></span>
    </div>
  </div>
</template>

<script>

import Logo from "../../components/Logo/Logo.vue"
import "./styles.css"

export default {
  components: {
    Logo
  },
  name: 'LogInView',
}
</script>
