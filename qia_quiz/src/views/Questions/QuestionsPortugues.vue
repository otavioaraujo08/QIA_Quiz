<template>
  <div class="student" style="height: 100vh;">
    <div v-if="finalizado == false">
      <div v-for="(item, index) of items" :key="item.id">
        <div v-if="indice == index && indice != items.length - 1 && indice == 0">
          <div class="form-floating">
            <textarea class="form-control" disabled id="floatingTextarea2" style="height: 100px"></textarea>
            <label for="floatingTextarea">{{item.comando}}</label>
          </div>
          <div id="botoes" class="d-flex flex-column">
            <div class="d-flex align-items-center justify-content-around mt-3">
              <div id="resposta">
                <button 
                  type="button" 
                  class="btn-lg btn-primary"
                  @click="()=> {pontuacao = parseInt(item.pontuacao); id = 1; compararResposta(id, pontuacao);}"
                >
                  {{item.resposta}}
                </button> 
              </div>
              <div id="pergunta_um">
                <button 
                  type="button" 
                  class="btn-lg btn-success"
                  @click="()=> {pontuacao = parseInt(item.pontuacao); id = 2; status= false; compararResposta(id, pontuacao);}"
                >
                  {{item.pergunta_n1}}
                </button>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-around mt-3">
              <div id="pergunta_dois">
                <button 
                  type="button" 
                  class="btn-lg btn-danger"
                  @click="()=> {pontuacao = parseInt(item.pontuacao); id = 3; status= false; compararResposta(id, pontuacao);}"
                >
                  {{item.pergunta_n2}}
                </button>
              </div>
              <div id="pergunta_tres">
                <button 
                  type="button" 
                  class="btn-lg btn-warning"
                  @click="()=> {pontuacao = parseInt(item.pontuacao); id = 4; status= false; compararResposta(id, pontuacao);}"
                  >
                   {{item.pergunta_n3}}
                </button>
              </div>
            </div>
            <div>
              <button 
                type="button" 
                class="btn-lg btn-dark" 
                @click="()=> {indice += 1; status = false}"
              >
                Próxima Questão
              </button>
            </div>
          </div>
        </div>
        <div v-if="indice == index && indice != items.length - 1 && indice != 0">
          <div class="form-floating">
            <textarea class="form-control" disabled id="floatingTextarea2" style="height: 100px"></textarea>
            <label for="floatingTextarea">{{item.comando}}</label>
          </div>
          <div id="botoes" class="d-flex flex-column">
            <div class="d-flex align-items-center justify-content-around mt-3">
              <div id="resposta">
                <button 
                  type="button" 
                  class="btn-lg btn-primary"
                  @click="()=> {pontuacao = parseInt(item.pontuacao); id = 1; compararResposta(id, pontuacao);}"
                >
                  {{item.resposta}}
                </button> 
              </div>
              <div id="pergunta_um">
                <button 
                  type="button" 
                  class="btn-lg btn-success"
                  @click="()=> {pontuacao = parseInt(item.pontuacao); id = 2; status= false; compararResposta(id, pontuacao);}"
                >
                  {{item.pergunta_n1}}
                </button>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-around mt-3">
              <div id="pergunta_dois">
                <button 
                  type="button" 
                  class="btn-lg btn-danger"
                  @click="()=> {pontuacao = parseInt(item.pontuacao); id = 3; status= false; compararResposta(id, pontuacao);}"
                >
                  {{item.pergunta_n2}}
                </button>
              </div>
              <div id="pergunta_tres">
                <button 
                  type="button" 
                  class="btn-lg btn-warning"
                  @click="()=> {pontuacao = parseInt(item.pontuacao); id = 4; status= false; compararResposta(id, pontuacao);}"
                  >
                   {{item.pergunta_n3}}
                </button>
              </div>
            </div>
            <div class="d-flex justify-content-around align-items-center mt-5">
              <button 
                type="button" 
                class="btn-lg btn-secondary" 
                @click="()=> {indice -= 1; status = false}"
              >
                Questão Anterior
              </button>
              <button 
                type="button" 
                class="btn-lg btn-dark" 
                @click="()=> {indice += 1; status = false}"
              >
                Próxima Questão
              </button>
            </div>
          </div>
        </div>
        <div v-else-if="index == items.length -1 && indice == items.length - 1">
          <div class="form-floating">
            <textarea class="form-control" disabled id="floatingTextarea2" style="height: 100px"></textarea>
            <label for="floatingTextarea">{{item.comando}}</label>
          </div>
          <div id="botoes" class="d-flex flex-column">
            <div class="d-flex align-items-center justify-content-around mt-3">
              <div id="resposta">
                <button 
                  type="button" 
                  class="btn-lg btn-primary"
                  @click="()=> {pontuacao = parseInt(item.pontuacao); id = 1; compararResposta(id, pontuacao);}"
                >
                  {{item.resposta}}
                </button> 
              </div>
              <div id="pergunta_um">
                <button 
                  type="button" 
                  class="btn-lg btn-success"
                  @click="()=> {pontuacao = parseInt(item.pontuacao); id = 2; status= false; compararResposta(id, pontuacao);}"
                >
                  {{item.pergunta_n1}}
                </button>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-around mt-3">
              <div id="pergunta_dois">
                <button 
                  type="button" 
                  class="btn-lg btn-danger"
                  @click="()=> {pontuacao = parseInt(item.pontuacao); id = 3; status= false; compararResposta(id, pontuacao);}"
                >
                  {{item.pergunta_n2}}
                </button>
              </div>
              <div id="pergunta_tres">
                <button 
                  type="button" 
                  class="btn-lg btn-warning"
                  @click="()=> {pontuacao = parseInt(item.pontuacao); id = 4; status= false; compararResposta(id, pontuacao);}"
                  >
                   {{item.pergunta_n3}}
                </button>
              </div>
            </div>
            <div class="d-flex justify-content-around align-items-center mt-5">
              <button 
                type="button" 
                class="btn-lg btn-secondary" 
                @click="()=> {indice -= 1; status = false}"
              >
                Questão Anterior
              </button>
              <button 
                type="button" 
                class="btn-lg btn-dark" 
                @click="finalizarQuiz()"
              >
                Finalizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="finalizado === true">
      <ScorePortugues :pontuacao="this.escolha" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRoute }  from 'vue-router'
import ScorePortugues           from "@/views/Score/ScorePortugues.vue" 

export default {
  name: "QuestionsPortugues",

  components: {
    ScorePortugues
  },

  data(){
    const routes = useRoute()

    let indice = 0
    let finalizado = false
    let status = false

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

      indice,
      finalizado,
      status,
      routes,
      escolha: 0,
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
    async receberQuiz() {
      try {
        const res = await axios.get(`http://localhost:3000/portugues`);
        this.items = res.data;

      } catch (error) {
        console.log(error);
      }
    },

    compararResposta(id, pontuacao) {
      if(id === 1){
        if(this.status === false) {
          this.escolha += pontuacao

          this.status = true
        }

        console.log(this.escolha)
        console.log(this.status)
      } else if (id === 2){
        if(this.status === false && pontuacao - this.escolha <= 0) {
          this.escolha -= pontuacao

          this.status = true
        }

        console.log(this.escolha)

      } else if (id === 3){
        if(this.status === false && pontuacao - this.escolha <= 0) {
          this.escolha -= pontuacao

          this.status = true
        }
        console.log(this.escolha)

      } else {
        if(this.status === false && pontuacao - this.escolha <= 0) {
          this.escolha -= pontuacao

          this.status = true
        }
        console.log(this.escolha)

      }
    },

    finalizarQuiz(){
      this.finalizado = true
      this.indice = 10
    }
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