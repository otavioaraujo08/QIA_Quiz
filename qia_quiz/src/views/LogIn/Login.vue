<template>
  <div>
    <body>
      <div class="page-wrap">
        <div class="left-panel">
          <div class="informacao-quiz">
            <h1>QiaQuiz</h1>
            <p>Uma maneira divertida de aprender</p>
            <p style="width: 70%; margin: 0 auto">
              O projeto tem como contexto atender a escola E M E I F Prefeito
              Laurival Cunha localizada na Ilha das Onças no munícipio de
              Barcarena no estado do Pará, e tem como objetivo estimular o
              interesse dos alunos ao estudo por meio do uso de tecnologia em
              suas atividades escolares.
            </p>
          </div>
        </div>

        <div class="right-panel">
          <back-button :route="'/'" />
          <div class="illustration">
            <logo />
          </div>
          <form class="animated-form d-flex flex-column align-items-center">
            <h3>Escolha uma opção</h3>
            <div class="form-group">
              <router-link to="/TeacherPassword">
                <button
                  type="button"
                  class="btn btn-lg btn-success"
                  style="width: 400px"
                >
                  <i class="fa-solid fa-user-tie"></i> Entrar como professor
                </button>
              </router-link>
            </div>
            <div class="form-group">
              <router-link to="/Student">
                <button
                  type="button"
                  class="btn btn-lg btn-danger"
                  style="width: 400px"
                >
                  <i class="fa-solid fa-chalkboard-user"></i> Entrar como aluno
                </button>
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import Logo from "@/components/Logo/Logo.vue";
import BackButton from "@/components/BackButton/BackButton.vue";

export default {
  name: "LogInView",

  components: {
    Logo,
    BackButton,
  },
};
</script>

<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
}

.login h3 {
  color: #fff;
  margin-bottom: 50px;
}

.buttons {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.buttons button {
  padding: 20px;
}

.imagem {
  min-height: auto;
  max-width: 100%;
  height: auto;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: montserrat, sans-serif;
}

.page-wrap {
  display: flex;
  min-height: 100vh;
}

.left-panel {
  flex: 1 1 66.666%;
  background-image: linear-gradient(to bottom right, #cc2e5d, #ff5858);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.left-panel .illustration {
  margin-bottom: 50px;
}

.left-panel h2 {
  color: #fff;
  font-size: 48px;
  font-weight: 400;
  text-align: center;
}

.informacao-quiz {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  width: 800px;
  height: 400px;
  border-radius: 16px;
}

.informacao-quiz p {
  margin-bottom: 30px;
}

.right-panel {
  flex: 1 1 33.333%;
  padding: 25px;
}

.right-panel h1 {
  color: #ff5858;
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 50px;
}

.right-panel h1 strong {
  color: #cc2e5d;
  font-weight: 900;
}

.animated-form h3 {
  color: #666;
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 45px;
}

.animated-form .form-group {
  position: relative;
  display: flex;
  margin-bottom: 45px;
}

.form-group.flex-end {
  justify-content: flex-end;
}

.animated-form .form-group label {
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  color: #aaa;
  font-size: 20px;
  transition: 0.4s ease-out;
}

.animated-form .form-group input {
  display: block;
  width: 100%;
  padding: 10px 0px;
  border: none;
  outline: none;
  background: none;
  border-bottom: 3px solid #aaa;

  color: #666;
  font-size: 20px;
  transition: 0.4s ease-out;
}

.animated-form .form-group:focus-within label,
.animated-form .form-group.has-content label {
  top: 0px;
  transform: translateY(-100%);
  color: #ff5858;
}

.animated-form .form-group:focus-within input,
.animated-form .form-group.has-content input {
  border-bottom-color: #ff5858;
}
.animated-form .form-group.flex-end {
  margin-bottom: 25px;
}
.animated-form .form-group .button {
  display: inline-block;
  width: auto;
  padding: 15px 60px;
  border: 3px solid #ff5858;
  border-radius: 999px;
  background-image: linear-gradient(
    to right,
    transparent 50%,
    #cc2e5d 50%,
    #ff5858
  );
  background-size: 200%;

  color: #ff5858;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
}

.animated-form .form-group .button:hover {
  color: #fff;
  background-position: 100%;
  border: 3px solid #fff;
}

.animated-form .lost-password a {
  color: #ff5858;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
}
.animated-form .lost-password a:hover {
  border-bottom-color: #ff5858;
}
</style>
