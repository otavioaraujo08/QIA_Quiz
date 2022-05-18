<template>
  <div style="height: 100%;">
    <Quiz_Portugues/>
    <Quiz_Ingles/>
    <Quiz_Matematica/>
    <Quiz_Ciencias/>
    <Quiz_Historia/>
    <Quiz_Geografia/>
  </div>
</template>

<script>
import { useRouter }  from 'vue-router'
import axios          from "axios";
import Quiz_Portugues from "@/components/MakeQuiz/Quiz_Portugues.vue";
import Quiz_Ingles from "@/components/MakeQuiz/Quiz_Ingles.vue";
import Quiz_Matematica from "@/components/MakeQuiz/Quiz_Matematica.vue";
import Quiz_Ciencias from "@/components/MakeQuiz/Quiz_Ciencias.vue";
import Quiz_Historia from "@/components/MakeQuiz/Quiz_Historia.vue";
import Quiz_Geografia from "@/components/MakeQuiz/Quiz_Geografia.vue";
import "./styles.css";

export default {
  name: "ManageQuizView",

  components: {
    Quiz_Portugues,
    Quiz_Ingles,
    Quiz_Matematica,
    Quiz_Ciencias,
    Quiz_Historia,
    Quiz_Geografia
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
        const res = await axios.get(`http://localhost:3000/ingles`);
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
<style>
</style>
