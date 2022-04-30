import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Login from '../views/LogIn/Login.vue'
import TeacherPassword from '../views/TeacherPassword/TeacherPassword.vue'
import ChooseQuiz from '../views/ChooseQuiz/ChooseQuiz.vue'
import ManageQuiz from '../views/ManageQuiz/ManageQuiz.vue'
import Student from '../views/Student/Student.vue'
import SetQuiz from '../views/SetQuiz/SetQuiz.vue'
import EditQuiz from '../views/EditQuiz/EditQuiz.vue'
import Questions from '../views/Questions/Questions.vue'
import Score from '../views/Score/Score.vue'

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
    path: '/SetQuiz',
    name: 'SetQuiz',
    component: SetQuiz
  },
  {
    path: '/EditQuiz',
    name: 'EditQuiz',
    component: EditQuiz
  },
  {
    path: '/Questions',
    name: 'Questions',
    component: Questions
  },
  {
    path: '/Score',
    name: 'Score',
    component: Score
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
