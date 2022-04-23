<template>
  <div class="teacher">
    <back-button 
      :route="'/Login'"
    />
    <logo />
    <h3>Bem vindo, professor</h3>
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1"
        ><i class="fa-solid fa-lock"></i
      ></span>
      <input
        v-model="password"
        :type="passwordFieldType"
        class="form-control"
        placeholder="Insira a sua senha"
      />
      <span class="input-group-text">
        <button type="password" @click="switchVisibility">
          <i class="fa-solid fa-eye-slash"></i>
        </button
      ></span>
    </div>
    <div class="mt-2 d-flex flex-column">
      <router-link to="/ChooseQuiz">
        <button class="btn btn-lg btn-success" :disabled="!password.length">Fazer Login</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Logo from "../../components/Logo/Logo.vue";
import BackButton from "../../components/BackButton/BackButton.vue";
import "./styles.css";

export default {
  components: {
    Logo,
    BackButton,
  },
  name: "LogInView",
  data() {
    return {
      password: "",
      correctPassword: "qiaquiz",
      passwordFieldType: "password",
    };
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
  },
};
</script>
