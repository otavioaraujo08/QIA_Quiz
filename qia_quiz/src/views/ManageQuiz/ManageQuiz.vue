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
        <tr>
          <th scope="row">1</th>
          <td>Funções de primeiro grau</td>
          <td>
            <router-link to="/EditQuiz">
              <button type="button" class="btn btn-success"><i class="fa-solid fa-pen-to-square"></i></button>
            </router-link>
          </td>
          <td>
            <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Funções de primeiro grau</td>
          <td>
            <router-link to="/EditQuiz">
              <button type="button" class="btn btn-success"><i class="fa-solid fa-pen-to-square"></i></button>
            </router-link>
          </td>
          <td>
            <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Funções de primeiro grau</td>
          <td>
            <router-link to="/EditQuiz">
              <button type="button" class="btn btn-success"><i class="fa-solid fa-pen-to-square"></i></button>
            </router-link>
          </td>
          <td>
            <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BackButton from "../../components/BackButton/BackButton.vue";
import "./styles.css";

export default {
  name: "ManageQuizView",
  components: {
    BackButton,
  },
};
</script>
