<template>
  <div class="manage">
    <nav class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <i class="fa-solid fa-gear"></i>
        <h3>Quiz de Português</h3>
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
              <button type="button" class="btn btn-success" @click="editarCampos(item.id)"><i class="fa-solid fa-pen-to-square"></i></button>
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
import axios          from "axios";
import { useRouter }  from 'vue-router'

export default {
  name: "ManageQuizView",

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
    // Método Create
    async created() {
      try {
        const res = await axios.get(`http://localhost:3000/portugues`);
          this.items = res.data;
      } catch (error) {
        console.log(error);
      }
    },

    editarCampos(id) {
      this.router.push({name: 'SetQuizPortugues', params: {id} })
    },

    // Método Remove
    removeItem(id) {
      axios.delete(`http://localhost:3000/portugues/${id}`)
      this.items = this.items.filter(item => item.id !== id)
      this.created()
    }
  },
};
</script>

<style>
.choose{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
}

.choose h3{
  color: #fff;
}
</style>