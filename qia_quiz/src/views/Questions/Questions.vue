<template>
  <div class="student">
    <div class="form-floating">
      <textarea class="form-control" disabled placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
      <label for="floatingTextarea">Comando da questão</label>
    </div>
    <div class="d-flex flex-column">
      <div class="d-flex align-items-center justify-content-around mt-3">
        <div>
          <button type="button" class="btn-lg btn-primary">Alternativa 1</button>
        </div>
        <div>
          <button type="button" class="btn-lg btn-success">Alternativa 2</button>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-around mt-3">
        <div>
          <button type="button" class="btn-lg btn-danger">Alternativa 3</button>
        </div>
        <div>
          <button type="button" class="btn-lg btn-warning">Alternativa 4</button>
        </div>
      </div>
      <div>
        <router-link to="/Score">
          <button type="button" class="btn-lg btn-primary">Finalizar</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import "./styles.css";

export default {
  name: "ManageQuizView",
};
</script>
