<template>
  <div class="score">
    <div>
      <h3 v-if="this.items.pontuacao_recebida === 0">
        Infelizmente você ficou {{ this.items.pontuacao_recebida }} pontos :C
      </h3>
      <h3 v-else>
        Parabéns você ficou com <strong>{{ this.items.pontuacao_recebida }}</strong> pontos !!
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
import axios from "axios";
import { useRoute } from 'vue-router'

export default {
  name: "ManageQuizView",

   data(){
    const routes = useRoute()

    return{
      item: [],
      items: {
        professor: "",
        disciplina: "",
        titulo: "",
        comando: "",
        resposta: "",
        pergunta_n1: "",
        pergunta_n2: "",
        pergunta_n3: "",
        pontuacao: "",
        pontuacao_recebida: "",
        peso: ""
      },
      routes,
      escolha: ""
    }
  },

  mounted(){
    this.receberQuiz(this.routes.params.id)
  },

  methods: {
    // Receber os valores referentes aos quizes
    async receberQuiz(id) {
        try {
          const data = await axios.patch(`${`http://localhost:3000/matematica`}/${id}`,{});
          this.items = data.data
          console.log(this.items)
        }catch (error) {
          console.error(error);
        }
    }
  }
};
</script>

