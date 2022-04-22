<template>
  <div class="login">
    <logo />
    <h3>Escolha uma opção</h3>
    <div class="buttons">
      <router-link to="/TeacherPassword">
        <button type="button" class="btn btn-lg btn-success"><i class="fa-solid fa-user-tie"></i> Entrar como professor</button>
      </router-link>
      <router-link to="/">
        <button type="button" class="btn btn-lg btn-danger"><i class="fa-solid fa-chalkboard-user"></i> Entrar como aluno</button>
      </router-link>
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
