<template>
  <div class="manage">
    <back-button 
      :route="'/ChooseQuiz'"
    />
    <nav class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <i class="fa-solid fa-gear"></i>
        <h3>Gerenciar Quizzes</h3>
      </div>
      <div>
        <h3>Professor</h3>
      </div>
    </nav>
    <hr>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Título</th>
          <th scope="col">Editar</th>
          <th scope="col">Excluir</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of items" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.titulo }}</td>
          <td>
            <router-link to="/SetQuiz/id">
              <button type="button" class="btn btn-success"><i class="fa-solid fa-pen-to-square"></i></button>
            </router-link>
          </td>
          <td>
            <button type="button" class="btn btn-danger" @click="removeItem(item.id)"><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import BackButton from "../../components/BackButton/BackButton.vue";
import "./styles.css";

export default {
  name: "ManageQuizView",

  components: {
    BackButton,
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
    // Método Create
    async created() {
      try {
        const res = await axios.get(`http://localhost:3000/professor_um`);
          this.items = res.data;
      } catch (error) {
        console.log(error);
      }
    },

    // Método Remove
    removeItem(id) {
      axios.delete(`http://localhost:3000/professor_um/${id}`)
      this.items = this.items.filter(item => item.id !== id)
      this.created()
    }
  },
};
</script>
