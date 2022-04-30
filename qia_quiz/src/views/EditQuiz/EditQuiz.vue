<template>
  <div class="set">
    <back-button 
      :route="'/ManageQuiz'"
    />
    <nav class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <i class="fa-solid fa-circle-plus"></i>
        <h3>Editar Quiz</h3>
      </div>
      <div>
        <h3>Professor</h3>
      </div>
    </nav>
    <hr>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Professor</span>
      <input type="text" class="form-control" placeholder="Nome" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Disciplina</span>
      <input type="text" class="form-control" placeholder="Disciplina" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Título</span>
      <input type="text" class="form-control" placeholder="Título do quiz" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <div class="form-floating">
      <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
      <label for="floatingTextarea">Comando da questão</label>
    </div>
    <div class="d-flex flex-column">
      <div class="d-flex align-items-center justify-content-around mt-3">
        <div>
          <input v-model="alternative1" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Alternativa 1">
        </div>
        <input class="form-check-input mt-0" type="checkbox" :value="checked" aria-label="Radio button for following text input">
        <div>
          <input v-model="alternative2" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Alternativa 2">
        </div>
        <input class="form-check-input mt-0" type="checkbox" :value="checked" aria-label="Radio button for following text input">
      </div>
      <div class="d-flex align-items-center justify-content-around mt-3">
        <div>
          <input v-model="alternative3" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Alternativa 3">
        </div>
        <input class="form-check-input mt-0" type="checkbox" :value="checked" aria-label="Radio button for following text input">
        
        <div>
          <input v-model="alternative4" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Alternativa 4">
        </div>
        <input class="form-check-input mt-0" type="checkbox" :value="checked" aria-label="Radio button for following text input">
      </div>
      <div class="d-flex justify-content-between mt-3">
        <div>
          <button type="button" class="btn btn-primary">+ Questão</button>
          <button type="button" class="btn btn-danger">Excluír Questão</button>
        </div>
        <div>
          <router-link to="/ManageQuiz">
            <button type="button" class="btn btn-success">Finalizar</button>
          </router-link>
        </div>
      </div>
    </div>
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
  data(){
    return{
      alternative1: "",
      alternative2: "",
      alternative3: "",
      alternative4: "",
      checked: false
    }
  }
};
</script>
