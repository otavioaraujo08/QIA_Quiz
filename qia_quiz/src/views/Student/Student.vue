<template>
  <div style="height: 100vh;">
    <Quiz_Portugues/>
    <Quiz_Matematica/>
  </div>
</template>

<script>
import { useRouter }  from 'vue-router'
import axios          from "axios";
import Quiz_Portugues from "@/components/MakeQuiz/Quiz_Portugues.vue";
import Quiz_Matematica from "@/components/MakeQuiz/Quiz_Matematica.vue";
import "./styles.css";

export default {
  name: "ManageQuizView",

  components: {
    Quiz_Portugues,
    Quiz_Matematica
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
