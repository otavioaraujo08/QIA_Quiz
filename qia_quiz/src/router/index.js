import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Login from '../views/LogIn/Login.vue'
import TeacherPassword from '../views/TeacherPassword/TeacherPassword.vue'

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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
