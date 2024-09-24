import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import CreateAccount from '@/views/CreateAccount.vue'
import CreateNewPassword from '@/components/CreateNewPassword.vue'
import AccountManagement from '@/views/AccountManagement.vue'
import Dashboard from '@/components/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:'createAccount',
      component: CreateAccount
    },
    {
      path:'/login',
      name:'login',
      component: Login
    },
    {
      path:'/create-new-password',
      name: 'create-new-password',
      component: CreateNewPassword
    },
    {
      path:'/account-management',
      name:'accountManagement',
      component: AccountManagement
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component: Dashboard
    }
    
  ]
})


export default router
