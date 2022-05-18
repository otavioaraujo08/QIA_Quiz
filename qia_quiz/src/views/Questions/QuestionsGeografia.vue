<template>
  <div class="student" style="height: 100vh">
    <div v-if="finalizado == false">
      <div v-for="(item, index) of items" :key="item.id">
        <div
          v-if="indice == index && indice != items.length - 1 && indice == 0"
          style="margin-top: 160px"
        >
          <div class="form-floating">
            <textarea
              class="form-control"
              disabled
              id="floatingTextarea2"
              style="height: 100px"
            ></textarea>
            <label style="font-size: 32px" for="floatingTextarea">{{
              item.comando
            }}</label>
          </div>
          <div id="botoes" class="d-flex flex-column">
            <div class="mt-3">
              <div id="resposta">
                <button
                  type="button"
                  class="btn-lg btn-primary"
                  style="width: 100%"
                  @click="
                    () => {
                      pontuacao = parseInt(item.pontuacao);
                      id = 1;
                      select(id);
                    }
                  "
                >
                  {{ item.resposta }}
                </button>
              </div>
              <div id="pergunta_um" class="mt-3">
                <button
                  type="button"
                  style="width: 100%"
                  class="btn-lg btn-success"
                  @click="
                    () => {
                      pontuacao = parseInt(item.pontuacao);
                      id = 2;
                      select(id);
                      status = false;
                    }
                  "
                >
                  {{ item.pergunta_n1 }}
                </button>
              </div>
            </div>
            <div class="mt-3">
              <div id="pergunta_dois">
                <button
                  type="button"
                  class="btn-lg btn-danger"
                  style="width: 100%"
                  @click="
                    () => {
                      pontuacao = parseInt(item.pontuacao);
                      id = 3;
                      select(id);
                      status = false;
                    }
                  "
                >
                  {{ item.pergunta_n2 }}
                </button>
              </div>
              <div id="pergunta_tres">
                <button
                  type="button"
                  class="btn-lg btn-warning mt-3"
                  style="width: 100%"
                  @click="
                    () => {
                      pontuacao = parseInt(item.pontuacao);
                      id = 4;
                      select(id);
                      status = false;
                    }
                  "
                >
                  {{ item.pergunta_n3 }}
                </button>
              </div>
            </div>
            <div>
              <button
                type="button"
                class="btn-lg btn-dark mt-3"
                @click="
                  () => {
                    indice += 1;
                    status = false;
                    compararResposta();
                  }
                "
              >
                Próxima Questão
              </button>
            </div>
          </div>
        </div>
        <div
          v-if="indice == index && indice != items.length - 1 && indice != 0"
          style="margin-top: 160px"
        >
          <div class="form-floating">
            <textarea
              class="form-control"
              disabled
              id="floatingTextarea2"
              style="height: 100px"
            ></textarea>
            <label style="font-size: 32px" for="floatingTextarea">{{
              item.comando
            }}</label>
          </div>
          <div id="botoes" class="d-flex flex-column">
            <div class="mt-3">
              <div id="resposta">
                <button
                  type="button"
                  class="btn-lg btn-primary"
                  style="width: 100%"
                  @click="
                    () => {
                      pontuacao = parseInt(item.pontuacao);
                      id = 1;
                      select(id);
                    }
                  "
                >
                  {{ item.resposta }}
                </button>
              </div>
              <div id="pergunta_um" class="mt-3">
                <button
                  type="button"
                  class="btn-lg btn-success"
                  style="width: 100%"
                  @click="
                    () => {
                      pontuacao = parseInt(item.pontuacao);
                      id = 2;
                      select(id);
                      status = false;
                    }
                  "
                >
                  {{ item.pergunta_n1 }}
                </button>
              </div>
            </div>
            <div class="mt-3">
              <div id="pergunta_dois">
                <button
                  type="button"
                  class="btn-lg btn-danger"
                  style="width: 100%"
                  @click="
                    () => {
                      pontuacao = parseInt(item.pontuacao);
                      id = 3;
                      select(id);
                      status = false;
                    }
                  "
                >
                  {{ item.pergunta_n2 }}
                </button>
              </div>
              <div id="pergunta_tres" class="mt-3">
                <button
                  type="button"
                  class="btn-lg btn-warning"
                  style="width: 100%"
                  @click="
                    () => {
                      pontuacao = parseInt(item.pontuacao);
                      id = 4;
                      select(id);
                      status = false;
                    }
                  "
                >
                  {{ item.pergunta_n3 }}
                </button>
              </div>
            </div>
            <div class="d-flex justify-content-around align-items-center mt-3">
              <button
                type="button"
                class="btn-lg btn-secondary"
                @click="
                  () => {
                    id = 0;
                    select(id);
                    compararResposta();
                    indice -= 1;
                    status = false;
                  }
                "
              >
                Questão Anterior
              </button>
              <button
                type="button"
                class="btn-lg btn-dark"
                @click="
                  () => {
                    indice += 1;
                    status = false;
                    compararResposta();
                  }
                "
              >
                Próxima Questão
              </button>
            </div>
          </div>
        </div>
        <div
          v-else-if="index == items.length - 1 && indice == items.length - 1"
          style="margin-top: 160px"
        >
          <div class="form-floating">
            <textarea
              class="form-control"
              disabled
              id="floatingTextarea2"
              style="height: 100px"
            ></textarea>
            <label style="font-size: 32px" for="floatingTextarea">{{
              item.comando
            }}</label>
          </div>
          <div id="botoes" class="d-flex flex-column">
            <div class="mt-3">
              <div id="resposta">
                <button
                  type="button"
                  class="btn-lg btn-primary"
                  style="width: 100%"
                  @click="
                    () => {
                      pontuacao = parseInt(item.pontuacao);
                      id = 1;
                      select(id);
                    }
                  "
                >
                  {{ item.resposta }}
                </button>
              </div>
              <div id="pergunta_um" class="mt-3">
                <button
                  type="button"
                  class="btn-lg btn-success"
                  style="width: 100%"
                  @click="
                    () => {
                      pontuacao = parseInt(item.pontuacao);
                      id = 2;
                      select(id);
                      status = false;
                    }
                  "
                >
                  {{ item.pergunta_n1 }}
                </button>
              </div>
            </div>
            <div class="mt-3">
              <div id="pergunta_dois">
                <button
                  type="button"
                  class="btn-lg btn-danger"
                  style="width: 100%"
                  @click="
                    () => {
                      pontuacao = parseInt(item.pontuacao);
                      id = 3;
                      select(id);
                      status = false;
                    }
                  "
                >
                  {{ item.pergunta_n2 }}
                </button>
              </div>
              <div id="pergunta_tres" class="mt-3">
                <button
                  type="button"
                  class="btn-lg btn-warning"
                  style="width: 100%"
                  @click="
                    () => {
                      pontuacao = parseInt(item.pontuacao);
                      id = 4;
                      select(id);
                      status = false;
                    }
                  "
                >
                  {{ item.pergunta_n3 }}
                </button>
              </div>
            </div>
            <div class="d-flex justify-content-around align-items-center mt-3">
              <button
                type="button"
                class="btn-lg btn-secondary"
                @click="
                  () => {
                    id = 0;
                    select(id);
                    compararResposta();
                    indice -= 1;
                    status = false;
                  }
                "
              >
                Questão Anterior
              </button>
              <button
                type="button"
                class="btn-lg btn-dark"
                @click="
                  compararResposta();
                  finalizarQuiz();
                "
              >
                Finalizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="finalizado === true">
      <ScoreGeografia :pontuacao="this.pontuacao_final" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";
import ScoreGeografia from "@/views/Score/ScoreGeografia.vue";

export default {
  name: "QuestionsGeografia",

  components: {
    ScoreGeografia,
  },

  data() {
    const routes = useRoute();

    let indice = 0;
    let finalizado = false;
    let status = false;
    let selecionado = 0;
    let pontuacao_acumulada = [];
    let pontuacao_final = 0;

    return {
      item: [],

      items: {
        professor: "",
        disciplina: "",
        titulo: "",
        comando: "",
        resposta: "",
        pergunta_n1: "",
        pergunta_n2: "",
        pergunta_n3: "",
        pontuacao: "",
        pontuacao_recebida: "",
        peso: "",
      },

      numeros: {
        numero_um: 1,
        numero_dois: 2,
        numero_tres: 3,
        numero_quatro: 4,
      },

      indice,
      finalizado,
      status,
      routes,
      escolha: 0, //Na logica nao esta sendo utilizado atualmente
      pontuacao_acumulada,
      pontuacao_final,
      selecionado,
    };
  },

  mounted() {
    this.gerarValor();
    this.receberQuiz(this.routes.params.id);
  },

  methods: {
    gerarValor() {
      var key = 1;

      for (key in this.numeros) {
        this.numeros[key] = Math.floor(Math.random() * 4) + 1;
      }
    },

    // Receber os valores referentes aos quizes
    async receberQuiz() {
      try {
        const res = await axios.get(`http://localhost:3000/geografia`);
        this.items = res.data;
      } catch (error) {
        console.log(error);
      }
    },

    select(id) {
      this.selecionado = id;
      console.log(this.selecionado);
    },

    compararResposta() {
      console.log(`Comparando Respostas:`);
      console.log(`Selecionado: ${this.selecionado}`);
      if (this.selecionado === 1) {
        this.pontuacao_acumulada.push(parseInt(this.pontuacao));

        console.log(`Pontuação acumulada: ${this.pontuacao_final}`);
      }
      if (this.selecionado != 1 && this.selecionado != 0) {
        this.pontuacao_acumulada.push(0);
      }
      if (this.selecionado === 0) {
        this.pontuacao_acumulada.pop();
      }
      this.selecionado = 5;
      console.log(this.pontuacao_acumulada);
      return;
    },

    finalizarQuiz() {
      this.pontuacao_acumulada.forEach((ponto) => {
        this.pontuacao_final = this.pontuacao_final + parseInt(ponto);
      });
      this.finalizado = true;
      this.indice = 10;
    },
  },
};
</script>

<style>
#botoes {
  display: -webkit-flex;
  display: flex;
}

div#resposta {
  -webkit-order: v-bind(numeros.numero_um);
}
div#pergunta_um {
  -webkit-order: v-bind(numeros.numero_dois);
}
div#pergunta_dois {
  -webkit-order: v-bind(numeros.numero_tres);
}
div#pergunta_tres {
  -webkit-order: v-bind(numeros.numero_quatro);
}
</style>
