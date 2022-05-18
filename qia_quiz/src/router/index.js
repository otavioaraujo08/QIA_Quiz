import { createRouter, 
  createWebHashHistory }    from 'vue-router'
import Home                 from '../views/Home/Home.vue'
import Login                from '../views/LogIn/Login.vue'
import TeacherPassword      from '../views/TeacherPassword/TeacherPassword.vue'
import ChooseQuiz           from '../views/ChooseQuiz/ChooseQuiz.vue'
import ManageQuiz           from '../views/ManageQuiz/ManageQuiz.vue'
import Student              from '../views/Student/Student.vue'
import SetQuizIngles     from '../views/SetQuiz/SetQuizIngles.vue'
import SetQuizGeografia     from '../views/SetQuiz/SetQuizGeografia.vue'
import SetQuizPortugues     from '../views/SetQuiz/SetQuizPortugues.vue'
import SetQuizMatematica    from '../views/SetQuiz/SetQuizMatematica.vue'
import SetQuizCiencias       from '../views/SetQuiz/SetQuizCiencias.vue'
import SetQuizHistoria      from '../views/SetQuiz/SetQuizHistoria.vue'
import QuestionsIngles   from '../views/Questions/QuestionsIngles.vue'
import QuestionsGeografia   from '../views/Questions/QuestionsGeografia.vue'
import QuestionsPortugues   from '../views/Questions/QuestionsPortugues.vue'
import QuestionsMatematica  from '../views/Questions/QuestionsMatematica.vue'
import QuestionsCiencias     from '../views/Questions/QuestionsCiencias.vue'
import QuestionsHistoria     from '../views/Questions/QuestionsHistoria.vue'
import ScoreIngles       from '../views/Score/ScoreIngles.vue'
import ScoreGeografia       from '../views/Score/ScoreGeografia.vue'
import ScorePortugues       from '../views/Score/ScorePortugues.vue'
import ScoreMatematica      from '../views/Score/ScoreMatematica.vue'
import ScoreHistoria      from '../views/Score/ScoreHistoria.vue'
import ScoreCiencias      from '../views/Score/ScoreCiencias.vue'

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
    path: '/SetQuizIngles/:id?',
    name: 'SetQuizIngles',
    component: SetQuizIngles
  },
  {
    path: '/SetQuizGeografia/:id?',
    name: 'SetQuizGeografia',
    component: SetQuizGeografia
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
    path: '/SetQuizCiencias/:id?',
    name: 'SetQuizCiencias',
    component: SetQuizCiencias
  },
  {
    path: '/SetQuizHistoria/:id?',
    name: 'SetQuizHistoria',
    component: SetQuizHistoria
  },
  {
    path: '/QuestionsIngles/:id?',
    name: 'QuestionsIngles',
    component: QuestionsIngles
  },
  {
    path: '/QuestionsGeografia/:id?',
    name: 'QuestionsGeografia',
    component: QuestionsGeografia
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
    path: '/QuestionsCiencias/:id?',
    name: 'QuestionsCiencias',
    component: QuestionsCiencias
  },
  {
    path: '/QuestionsHistoria/:id?',
    name: 'QuestionsHistoria',
    component: QuestionsHistoria
  },
  {
    path: '/ScoreIngles/:id?', 
    name: 'ScoreIngles',
    component: ScoreIngles
  },
  {
    path: '/ScoreGeografia/:id?', 
    name: 'ScoreGeografia',
    component: ScoreGeografia
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
  {
    path: '/ScoreHistoria/:id?', 
    name: 'ScoreHistoria',
    component: ScoreHistoria
  },
  {
    path: '/ScoreCiencias/:id?', 
    name: 'ScoreCiencias',
    component: ScoreCiencias
  },
  {
    path: '/ScoreIngles/:id?', 
    name: 'ScoreIngles',
    component: ScoreIngles
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
