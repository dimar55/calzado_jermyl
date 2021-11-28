import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import barraNavegacion from './components/barraNav.vue';

const routes = [{
  path: '/',
  name: 'root',
  component: App
}]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
