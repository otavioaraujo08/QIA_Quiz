<template>
  <div class="score">
    <div>
      <h3>
        {{ avaliacao }}
        <br>
        Pontuação: <span style="color: yellow">{{ pontuacao }}</span> de <span style="color: yellowgreen">{{ pontuacao_max }}</span>.
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
  name: "ScoreMatematica",

  props: {
    pontuacao: Number
  },

  data() {
    let pontuacao_max = 0;
    let n_questoes = 0;
    let porc_acerto;
    let avaliacao;
    
    const results = {
      pontuacao_max,
      n_questoes,
      porc_acerto,
      avaliacao
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
        const res = await axios.get(`http://localhost:3000/matematica`);
        const { pontuacao } = this.$props
        this.n_questoes = res.data.length;
        res.data.forEach(questao => {
          return this.pontuacao_max += parseInt(questao.pontuacao);
        });
        
        this.porc_acerto = parseInt(pontuacao*100/this.pontuacao_max)

        if ( this.porc_acerto <= 50 ) {
          this.avaliacao = "Você precisa melhorar."
        } 
        if ( this.porc_acerto > 50 && this.porc_acerto < 70 ) {
          this.avaliacao = "Você não foi tão bem."
        }
        if ( this.porc_acerto >= 70 && this.porc_acerto < 90 ) {
          this.avaliacao = "Muito bem!"
        }
        if ( this.porc_acerto >= 90 && this.porc_acerto <=100 ) {
          this.avaliacao = "Excelente!"
        }
        

      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
