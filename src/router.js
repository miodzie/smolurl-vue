import { createRouter, createWebHashHistory, RouterView } from 'vue-router'
import CreateURLForm from './components/CreateURLForm.vue'

const routes = [  
  { path: '/', component: CreateURLForm },
  { path: '/my/urls', component: CreateURLForm }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
