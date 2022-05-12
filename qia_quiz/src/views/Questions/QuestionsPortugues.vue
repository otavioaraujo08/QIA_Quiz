<template>
  <div class="student">
    <div class="form-floating">
      <textarea class="form-control" disabled id="floatingTextarea2" style="height: 100px"></textarea>
      <label for="floatingTextarea">{{this.items.comando}}</label>
    </div>
    <div id="botoes" class="d-flex flex-column">
      <div class="d-flex align-items-center justify-content-around mt-3">
        <div id="resposta">
          <button 
            type="button" 
            class="btn-lg btn-primary"
            @click="compararResposta(1)"
          >
            {{this.items.resposta}}
          </button> 
        </div>
        <div id="pergunta_um">
          <button 
            type="button" 
            class="btn-lg btn-success"
            @click="compararResposta(2)"
          >
            {{this.items.pergunta_n1}}
          </button>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-around mt-3">
        <div id="pergunta_dois">
          <button 
            type="button" 
            class="btn-lg btn-danger"
            @click="compararResposta(3)"
          >
            {{this.items.pergunta_n2}}
          </button>
        </div>
        <div id="pergunta_tres">
          <button 
            type="button" 
            class="btn-lg btn-warning"
            @click="compararResposta(4)"
            >
             {{this.items.pergunta_n3}}
          </button>
        </div>
      </div>
      <div>
        <button 
          type="button" 
          class="btn-lg btn-primary" 
          @click="finalizarQuiz(items.id)"
        >
          Finalizar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRouter, useRoute } from 'vue-router'

export default {
  name: "ManageQuizView",

  data(){
    const route = useRouter()
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

      numeros: {
        numero_um: 1,
        numero_dois: 2,
        numero_tres: 3,
        numero_quatro: 4,
      },

      route,
      routes,
      escolha: "",
    }
  },

  mounted(){
    this.gerarValor()
    this.receberQuiz(this.routes.params.id)
  },

  methods: {
    gerarValor(){
      var key = 1

      for (key in this.numeros ) {
        this.numeros[key] = Math.floor(Math.random() * 4) + 1;
      }
    },

    // Receber os valores referentes aos quizes
    async receberQuiz(id) {
        try {
          const data = await axios.patch(`${`http://localhost:3000/portugues`}/${id}`,{});
          this.items = data.data
        }catch (error) {
          console.error(error);
        }
    },

    compararResposta(id) {
      if(id === 1){
        this.escolha = this.items.resposta

        this.items.pontuacao_recebida = this.items.pontuacao
        
        this.salvarQuiz()

        this.finalizarQuiz(this.items.id)
      } else if (id === 2){
        this.escolha = this.items.pergunta_n1

        this.items.pontuacao_recebida = 0
        
        this.salvarQuiz()

        this.finalizarQuiz(this.items.id)
      } else if (id === 3){
        this.escolha = this.items.pergunta_n2

        this.items.pontuacao_recebida = 0
        
        this.salvarQuiz()

        this.finalizarQuiz(this.items.id)
      } else {
        this.escolha = this.items.pergunta_n3

        this.items.pontuacao_recebida = 0
        
        this.salvarQuiz()

        this.finalizarQuiz(this.items.id)
      }
    },
    
    // Finaliza o quiz e direciona para a tela do score
    finalizarQuiz(id) {
      this.route.push({name: 'ScorePortugues', params: {id} })
    },

        // Salvar
    async salvarQuiz() {
      try {
        const data = await axios.put(`${`http://localhost:3000/portugues`}/${this.routes.params.id}`, this.items)
        return data
      } catch (error) {
        console.error(error);
      }
    },
  }
};
</script>

<style>
  #botoes {
    display: -webkit-flex;
    display: flex;
  }

  div#resposta      {-webkit-order: v-bind(numeros.numero_um);;}
  div#pergunta_um   {-webkit-order: v-bind(numeros.numero_dois);;}
  div#pergunta_dois {-webkit-order: v-bind(numeros.numero_tres);;}
  div#pergunta_tres {-webkit-order: v-bind(numeros.numero_quatro);;}
</style>