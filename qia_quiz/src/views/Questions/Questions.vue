<template>
  <div class="student">
    <div class="form-floating">
      <textarea class="form-control" disabled id="floatingTextarea2" style="height: 100px"></textarea>
      <label for="floatingTextarea">{{this.items.comando}}</label>
    </div>
    <div class="d-flex flex-column">
      <div class="d-flex align-items-center justify-content-around mt-3">
        <div>
          <button type="button" class="btn-lg btn-primary">{{this.items.resposta}}</button> 
        </div>
        <div>
          <button type="button" class="btn-lg btn-success">{{this.items.pergunta_n1}}</button>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-around mt-3">
        <div>
          <button type="button" class="btn-lg btn-danger">{{this.items.pergunta_n2}}</button>
        </div>
        <div>
          <button type="button" class="btn-lg btn-warning">{{this.items.pergunta_n3}}</button>
        </div>
      </div>
      <div>
        <button type="button" class="btn-lg btn-primary" @click="finalizarQuiz(items.id)">Finalizar</button>
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
        peso: ""
      },
      route,
      routes
    }
  },

  mounted(){
    this.receberQuiz(this.routes.params.id)
  },

  methods: {
    // Receber os valores referentes aos quizes
    async receberQuiz(id) {
        try {
          const data = await axios.patch(`${`http://localhost:3000/professor_um`}/${id}`,{});
          this.items = data.data
          this.item
        }catch (error) {
          console.error(error);
        }
    },
    
    // Finaliza o quiz e direciona para a tela do score
    finalizarQuiz(id) {
      this.route.push({name: 'Score', params: {id} })
    }
  }
};
</script>
