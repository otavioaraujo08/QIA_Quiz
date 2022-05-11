<template>
  <div class="student">
    <div class="form-floating">
      <textarea class="form-control" disabled id="floatingTextarea2" style="height: 100px"></textarea>
      <label for="floatingTextarea">{{this.items.perguntas[0][0]}}</label>
    </div>
    <div class="d-flex flex-column">
      <div class="d-flex align-items-center justify-content-around mt-3">
        <div>
          <button 
            type="button" 
            class="btn-lg btn-primary"
            @click="compararResposta(1)"
          >
            {{this.items.resposta}}
          </button> 
        </div>
        <div>
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
        <div>
          <button 
            type="button" 
            class="btn-lg btn-danger"
            @click="compararResposta(3)"
          >
            {{this.items.pergunta_n2}}
          </button>
        </div>
        <div>
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
          @click="finalizarQuiz(this.items.id)"
        >
          Finalizar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import "./styles.css";
import axios from "axios";
import { useRouter, useRoute } from 'vue-router'

export default {
  name: "ManageQuizView",

  data(){
    const route = useRouter()
    const routes = useRoute()

    let n_perguntas
    
    return{
      item: [],
      items: {
        professor: "",
        disciplina: "",
        titulo: "",
        perguntas: [
          {},
          {}
        ]
      },
      perguntas: [
          {
            comando: "",
            resposta: "",
            pergunta_n1: "",
            pergunta_n2: "",
            pergunta_n3: "",
            pontuacao: "",
            pontuacao_recebida: "",
            peso: "",
            id: ""
          }
      ],
      n_perguntas,
      route,
      routes,
      escolha: ""
    }
  },

  mounted(){
    console.log(this.items.perguntas[0])
    this.receberQuiz(this.routes.params.id)
  },

  methods: {
    // Receber os valores referentes aos quizes
    async receberQuiz(id) {
        try {
          const data = await axios.patch(`${`http://localhost:3000/quizes`}/${id}`,{});
          this.items = data.data
          this.perguntas = data.data.perguntas
          this.n_perguntas = data.data.perguntas.lentgh()
          console.log(n_perguntas)
          console.log(this.items)
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
      this.route.push({name: 'Score', params: {id} })
    },

        // Salvar
    async salvarQuiz() {
      try {
        const data = await axios.put(`${`http://localhost:3000/quizes`}/${this.routes.params.id}`, this.items)
        return data
      } catch (error) {
        console.error(error);
      }
    },
  }
};
</script>
