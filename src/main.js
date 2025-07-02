import { createApp } from 'vue'
import App from './App.vue'
import SignUp from './SignUp.vue'
import SignIn from './SignIn.vue'
import Dashboard from './Dashboard.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: SignUp },
  { path: '/signin', component: SignIn },
  { path: '/dashboard', component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
