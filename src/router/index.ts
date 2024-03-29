import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import AuthorizedView from '../views/AuthorizedView.vue';
import SelectRepoView from '../views/SelectRepoView.vue';
import IndexView from '../views/IndexView.vue';
import GenericAssignmentVue from '../views/GenericAssignmentVue.vue';
import UserNotFound from '../views/UserNotFound.vue';
import HelloPageVue from '../views/HelloPageVue.vue';
import FinishPageVue from '../views/FinishPageVue.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/authorized',
      name: 'authorized',
      component: AuthorizedView,
      props: (route) => ({ foo: route.query }),  
    },
    {
      path: '/select-repo',
      name: 'select-repo',
      component: SelectRepoView,
      props: (route) => ({ foo: route.query }),  
    },
    {
      path: '/assignment',
      name: 'assignment',
      component: GenericAssignmentVue,
      props: (route) => ({ foo: route.query }),  
    },
    {
      path: '/user-not-found',
      name: 'user-not-found',
      component: UserNotFound,
      props: (route) => ({ foo: route.query }),  
    },
    {
      path: '/hello-page',
      name: 'hello-page',
      component: HelloPageVue,
      props: (route) => ({ foo: route.query }),  
    },
    {
      path: '/finish',
      name: 'finish',
      component: FinishPageVue,
      props: (route) => ({ foo: route.query }),  
    }
  ]
})

export default router;
