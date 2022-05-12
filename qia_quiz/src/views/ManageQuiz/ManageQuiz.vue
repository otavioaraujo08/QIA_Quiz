<template>
  <div>
    <back-button 
      :route="'/ChooseQuiz'"
    />

    <QuizPortugues />
    <QuizMatematica />
  </div>
</template>

<script>
import QuizPortugues        from '@/components/ManagerQuiz/Quiz_Portugues'
import QuizMatematica       from '@/components/ManagerQuiz/Quiz_Matematica'
import BackButton           from "@/components/BackButton/BackButton.vue";
import "./styles.css";

export default {
  name: "ManageQuizView",

  components: {
    BackButton,
    QuizPortugues,
    QuizMatematica
  },
};
</script>