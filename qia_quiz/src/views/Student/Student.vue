<template>
  <div class="student">
    <back-button :route="'/Login'" />
    <nav class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <i class="fa-solid fa-book"></i>
        <h3>Fazer Quiz</h3>
      </div>
      <div>
        <h3>Aluno</h3>
      </div>
    </nav>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Título</th>
          <th scope="col">Professor</th>
          <th scope="col">Disciplina</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of items" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.titulo }}</td>
          <td>{{ item.professor }}</td>
          <td>{{ item.disciplina }}</td>
          <td>
            <button type="button" class="btn btn-success"  @click="realizarQuiz(item.id)">Fazer Quiz</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios          from "axios";
import BackButton     from "../../components/BackButton/BackButton.vue";
import { useRouter }  from 'vue-router'
import "./styles.css";

export default {
  name: "ManageQuizView",

  components: {
    BackButton,
  },

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
        const res = await axios.get(`http://localhost:3000/quizes`);
          this.items = res.data;
      } catch (error) {
        console.log(error);
      }
    },

    realizarQuiz(id) {
      this.router.push({name: 'Questions', params: {id} })
    },
  }
};
</script>
