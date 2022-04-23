<template>
  <div class="choose">
    <back-button 
      :route="'/TeacherPassword'"
    />
    <logo />
    <h3>Você deseja?</h3>
    <div class="mt-3">
      <router-link to="/TeacherPassword">
        <button type="button" class="btn btn-lg btn-success">
          <i class="fa-solid fa-circle-plus"></i> Criar Quiz
        </button>
      </router-link>
    </div>
    <div class="mt-3">
      <router-link to="/ManageQuiz">
        <button type="button" class="btn btn-lg btn-danger">
          <i class="fa-solid fa-pen-to-square"></i> Gerenciar Quiz
        </button>
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
  name: "ChooseQuizView",
};
</script>
