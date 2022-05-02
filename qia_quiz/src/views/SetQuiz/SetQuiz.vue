<template>
  <div class="set">
    <back-button 
      :route="'/ChooseQuiz'"
    />
    <nav class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <i class="fa-solid fa-circle-plus"></i>
        <h3>Criar Quiz</h3>
      </div>
      <div>
        <h3>Professor</h3>
      </div>
    </nav>
    <hr>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Professor</span>
      <input v-model="items.professor" type="text" class="form-control" placeholder="Nome" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Disciplina</span>
      <input v-model="items.disciplina" type="text" class="form-control" placeholder="Disciplina" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Título</span>
      <input v-model="items.titulo" type="text" class="form-control" placeholder="Título do quiz" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="form-floating">
      <textarea v-model="items.comando" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
      <label for="floatingTextarea">Comando da questão</label>
    </div>

    <div class="d-flex flex-column">
      <div class="d-flex align-items-center justify-content-around mt-3">
        <div>
          <input v-model="items.resposta" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Alternativa 1">
        </div>
        <div>
          <input v-model="items.pergunta_n1" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Alternativa 2">
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-around mt-3">
        <div>
          <input v-model="items.pergunta_n2" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Alternativa 3">
        </div>
        
        <div>
          <input v-model="items.pergunta_n3" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Alternativa 4">
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-around mt-3">
        <div>
          <input v-model="items.pontuacao" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Pontuação">
        </div>       
        <div>
          <input v-model="items.peso" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Peso">
        </div>
      </div>

      <div class="d-flex justify-content-between mt-3">
        <div>
          <button type="button" class="btn btn-primary">+ Questão</button>
          <button type="button" class="btn btn-danger">Excluír Questão</button>
        </div>
        <div>
          <router-link to="/ManageQuiz">
            <button type="button" class="btn btn-success" @click="salvarQuiz()">Finalizar</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from "../../components/BackButton/BackButton.vue";
import "./styles.css";
import { useRouter, useRoute } from 'vue-router'
import axios from "axios";

export default {
  name: "ManageQuizView",
  components: {
    BackButton,
  },

  data(){
    const route = useRouter()
    const routes = useRoute()
    
    return{
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
    if(this.routes.params.id){
      this.editarQuiz(this.routes.params.id)
    } else {
      this.receberQuiz()
    }
  },

  methods: {
    // Receber os valores referentes aos quizes
    async receberQuiz() {
      try {
        const res = await axios.get(`http://localhost:3000/professor_um`);
        this.items = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    
    // Receber os valores referentes aos quizes
    async editarQuiz(id) {
        try {
          const data = await axios.patch(`${`http://localhost:3000/professor_um`}/${id}`,{});
          this.items = data.data
        }catch (error) {
          console.error(error);
        }
    },

    // Salvar
    async salvarQuiz() {
      if(this.routes.params.id){
        try {
          const data = await axios.put(`${`http://localhost:3000/professor_um`}/${this.routes.params.id}`, this.items)
          return data
        } catch (error) {
          console.error(error);
        }
      } else {
        const res = await axios.post(`http://localhost:3000/professor_um`, {
          professor:    this.items.professor,
          disciplina:   this.items.disciplina,
          titulo:       this.items.titulo,
          pontuacao:    this.items.pontuacao,
          peso:         this.items.peso,
          comando:      this.items.comando,
          resposta:     this.items.resposta,
          pergunta_n1:  this.items.pergunta_n1,
          pergunta_n2:  this.items.pergunta_n2,
          pergunta_n3:  this.items.pergunta_n3,
        });

        this.items = [...this.items, res.data];
      }
    },
  },
};
</script>
