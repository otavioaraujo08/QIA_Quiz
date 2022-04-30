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
        <tr>
          <th scope="row">1</th>
          <td>Funções de primeiro grau</td>
          <td>Otávio</td>
          <td>Matemática</td>
          <td>
            <router-link to="Questions">
              <button type="button" class="btn btn-success">Fazer Quiz</button>
            </router-link>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Sistema respiratório</td>
          <td>Marcos</td>
          <td>Biologia</td>
          <td>
            <router-link to="Questions">
              <button type="button" class="btn btn-success">Fazer Quiz</button>
            </router-link>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Estequiometria</td>
          <td>Matheus</td>
          <td>Química</td>
          <td>
            <router-link to="Questions">
              <button type="button" class="btn btn-success">Fazer Quiz</button>
            </router-link>
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
  components: {
    BackButton,
  },
  name: "ManageQuizView",
};
</script>
