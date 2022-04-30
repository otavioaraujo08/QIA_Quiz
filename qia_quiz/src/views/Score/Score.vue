<template>
  <div class="score">
    <div>
      <h3>Parabéns voce acertou 1 questão!!</h3>
    </div>
    <div>
        <router-link to="/Student">
          <button type="button" class="btn-lg btn-primary">Voltar a tela de quizzes</button>
        </router-link>
      </div>
  </div>
</template>

<script>
import "./styles.css";

export default {
  name: "ManageQuizView",
};
</script>
