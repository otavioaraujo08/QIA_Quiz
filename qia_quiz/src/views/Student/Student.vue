<template>
  <div style="height: 100%;">
    <Quiz_Portugues/>
    <Quiz_Matematica/>
    <Quiz_Ciencia/>
    <Quiz_Historia/>
  </div>
</template>

<script>
import { useRouter }  from 'vue-router'
import axios          from "axios";
import Quiz_Portugues from "@/components/MakeQuiz/Quiz_Portugues.vue";
import Quiz_Matematica from "@/components/MakeQuiz/Quiz_Matematica.vue";
import Quiz_Ciencia from "@/components/MakeQuiz/Quiz_Ciencias.vue";
import Quiz_Historia from "@/components/MakeQuiz/Quiz_Historia.vue";
import "./styles.css";

export default {
  name: "ManageQuizView",

  components: {
    Quiz_Portugues,
    Quiz_Matematica,
    Quiz_Ciencia,
    Quiz_Historia
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
        const res = await axios.get(`http://localhost:3000/portugues`);
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
