<template>
  <div class="score">
    <div>
      <h3 v-if="pontuacao === 0">
        Infelizmente você ficou {{ pontuacao }} pontos :C
      </h3>
      <h3 v-else>
        Parabéns você ficou com <strong>{{ pontuacao }}</strong> pontos !!
      </h3>
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
  name: "ScorePortugues",

  props: {
    pontuacao: Number
  },
};
</script>

