import { createRouter, 
  createWebHashHistory }    from 'vue-router'
import Home                 from '../views/Home/Home.vue'
import Login                from '../views/LogIn/Login.vue'
import TeacherPassword      from '../views/TeacherPassword/TeacherPassword.vue'
import ChooseQuiz           from '../views/ChooseQuiz/ChooseQuiz.vue'
import ManageQuiz           from '../views/ManageQuiz/ManageQuiz.vue'
import Student              from '../views/Student/Student.vue'
import SetQuizPortugues     from '../views/SetQuiz/SetQuizPortugues.vue'
import SetQuizMatematica    from '../views/SetQuiz/SetQuizMatematica.vue'
import SetQuizCiencia       from '../views/SetQuiz/SetQuizCiencia.vue'
import SetQuizHistoria      from '../views/SetQuiz/SetQuizHistoria.vue'
import QuestionsPortugues   from '../views/Questions/QuestionsPortugues.vue'
import QuestionsMatematica  from '../views/Questions/QuestionsMatematica.vue'
import QuestionsCiencia     from '../views/Questions/QuestionsCiencia.vue'
import QuestionsHistoria     from '../views/Questions/QuestionsHistoria.vue'
import ScorePortugues       from '../views/Score/ScorePortugues.vue'
import ScoreMatematica      from '../views/Score/ScoreMatematica.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Login',
    name: 'login',
    component: Login
  },
  {
    path: '/TeacherPassword',
    name: 'teacher-password',
    component: TeacherPassword
  },
  {
    path: '/ChooseQuiz',
    name: 'choose-quiz',
    component: ChooseQuiz
  },
  {
    path: '/ManageQuiz',
    name: 'manage-quiz',
    component: ManageQuiz
  },
  {
    path: '/Student',
    name: 'student',
    component: Student
  },
  {
    path: '/SetQuizPortugues/:id?',
    name: 'SetQuizPortugues',
    component: SetQuizPortugues
  },
  {
    path: '/SetQuizMatematica/:id?',
    name: 'SetQuizMatematica',
    component: SetQuizMatematica
  },
  {
    path: '/SetQuizCiencia/:id?',
    name: 'SetQuizCiencia',
    component: SetQuizCiencia
  },
  {
    path: '/SetQuizHistoria/:id?',
    name: 'SetQuizHistoria',
    component: SetQuizHistoria
  },
  {
    path: '/QuestionsPortugues/:id?',
    name: 'QuestionsPortugues',
    component: QuestionsPortugues
  },
  {
    path: '/QuestionsMatematica/:id?',
    name: 'QuestionsMatematica',
    component: QuestionsMatematica
  },
  {
    path: '/QuestionsCiencia/:id?',
    name: 'QuestionsCiencia',
    component: QuestionsCiencia
  },
  {
    path: '/QuestionsHistoria/:id?',
    name: 'QuestionsHistoria',
    component: QuestionsHistoria
  },
  {
    path: '/ScorePortugues/:id?', 
    name: 'ScorePortugues',
    component: ScorePortugues
  },
  {
    path: '/ScoreMatematica/:id?', 
    name: 'ScoreMatematica',
    component: ScoreMatematica
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
