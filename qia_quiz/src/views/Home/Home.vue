<template>
  <div class="home">
    <div class="vidro">
      <logo />
      <br>
      <router-link to="/Login">
        <a class="btn">Entrar</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo/Logo.vue" 

export default {
  components: {
    Logo
  },
  name: 'HomeView',
}
</script>

<style scoped>
.home{
  background: url("../../../public/circuit.svg");
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
}

.vidro {
  width: 70vh;
  height: 55vh;
  background: rgba( 255, 255, 255, 0.3 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 5px );
  -webkit-backdrop-filter: blur( 5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.btn {
  background: #4a8dba;
  background-image: -webkit-linear-gradient(top, #4a8dba, #179aeb);
  background-image: -moz-linear-gradient(top, #4a8dba, #179aeb);
  background-image: -ms-linear-gradient(top, #4a8dba, #179aeb);
  background-image: -o-linear-gradient(top, #4a8dba, #179aeb);
  background-image: linear-gradient(to bottom, #4a8dba, #179aeb);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}

.btn:hover {
  background: #3cb0fd;
  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  text-decoration: none;
}
</style>