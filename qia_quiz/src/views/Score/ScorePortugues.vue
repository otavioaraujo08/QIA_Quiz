<template>
  <div class="score">
    <div>
      <h3 v-if="pontuacao === 0">
        Infelizmente você ficou {{ pontuacao }} pontos :C
        <br>
        Porcentagem de acertos: {{ this.porc_acerto }}%
      </h3><h3 v-if="pontuacao === this.pontuacao_max">
        Parabéns, você acertou todas as questões ficando com o total de {{ pontuacao }} pontos!!
        <br>
        Porcentagem de acertos: {{ this.porc_acerto }}%
      </h3>
      <h3 v-else>
        Parabéns, do total de {{ this.pontuacao_max }} você ficou com <strong>{{ pontuacao }}</strong> pontos!!
        <br>
        Porcentagem de acertos: {{ this.porc_acerto }}%
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
import axios          from "axios";
import "./styles.css";
export default {
  name: "ScorePortugues",


  props: {
    pontuacao: Number
  },

  data() {
    let pontuacao_max = 0;
    let n_questoes = 0;
    let porc_acerto = 0;
    
    const results = {
      pontuacao_max,
      n_questoes,
      porc_acerto
    }

    return results;

  },

  mounted(){
    this.IAFeedback();
  },
  methods: {
    // Chamando todos os itens do DB
    async IAFeedback() {
      try {
        const res = await axios.get(`http://localhost:3000/portugues`);
        const { pontuacao } = this.$props
          //this.pontosPortugues = res.data;
        this.n_questoes = res.data.length;
        res.data.forEach(questao => {
          return this.pontuacao_max += parseInt(questao.pontuacao);
        });
        
        this.porc_acerto = parseFloat((pontuacao*100)/this.n_questoes)
        console.log(`n questoes: ${this.n_questoes}, \npontuação: ${pontuacao}, \nporcentagem: ${this.porc_acerto} \
        `)

      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

