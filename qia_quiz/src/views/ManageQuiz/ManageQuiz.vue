<template>
  <div>
    <back-button 
      :route="'/ChooseQuiz'"
    />

    <QuizPortugues />
    <QuizIngles />
    <QuizMatematica />
    <QuizCiencias />
    <QuizHistoria />
    <QuizGeografia />
  </div>
</template>

<script>
import QuizPortugues        from '@/components/ManagerQuiz/Quiz_Portugues'
import QuizIngles        from '@/components/ManagerQuiz/Quiz_Ingles'
import QuizMatematica       from '@/components/ManagerQuiz/Quiz_Matematica'
import QuizCiencias         from '@/components/ManagerQuiz/Quiz_Ciencias'
import QuizHistoria         from '@/components/ManagerQuiz/Quiz_Historia'
import QuizGeografia         from '@/components/ManagerQuiz/Quiz_Geografia'
import BackButton           from "@/components/BackButton/BackButton.vue";
import "./styles.css";

export default {
  name: "ManageQuizView",

  components: {
    BackButton,
    QuizPortugues,
    QuizIngles,
    QuizMatematica,
    QuizCiencias,
    QuizHistoria,
    QuizGeografia
  },
};
</script>