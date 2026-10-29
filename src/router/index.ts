import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import LearningView from '../views/LearningView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Suitech | Tecnología que crea soluciones' }
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: ProjectsView,
    meta: { title: 'Proyectos & Portafolio Técnico | Suitech' }
  },
  {
    path: '/aprendizaje',
    name: 'aprendizaje',
    component: LearningView,
    meta: { title: 'Construyendo Suitech | Aprendizaje & Divulgación Técnica' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      };
    }
    return { top: 0, behavior: 'smooth' };
  }
});

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
});

export default router;
