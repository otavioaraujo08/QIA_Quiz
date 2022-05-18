<template>
  <div class="student-quiz">
    <nav class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <i class="fa-solid fa-book"></i>
        <h3>Quiz de História</h3>
      </div>
      <div>
        <button type="button" class="btn btn-success"  @click="realizarQuiz()">Realizar Quiz</button>
      </div>
    </nav>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Título</th>
          <th scope="col">Professor</th>
          <th scope="col">Pontuação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of items" :key="item.id">
          <td>{{ item.titulo }}</td>
          <td>{{ item.professor }}</td>
          <td>{{ item.pontuacao }}</td>
        </tr>
      </tbody>
    </table>
    <hr />
  </div>
</template>

<script>
import axios          from "axios";
import { useRouter }  from 'vue-router'
import "./styles.css";

export default {
  name: "Quiz_Historia",

  setup(){
    const router = useRouter()

    return {
      router
    }
  },

  data() {
    return {
      items: [],
    };
  },

  mounted(){
    this.created()
  },

  methods: {
    // Chamando todos os itens do DB
    async created() {
      try {
        const res = await axios.get(`http://localhost:3000/historia`);
          this.items = res.data;
      } catch (error) {
        console.log(error);
      }
    },

    realizarQuiz() {
      this.router.push({name: 'QuestionsHistoria'})
    },
  }
};
</script>
