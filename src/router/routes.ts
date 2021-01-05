import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-404.vue')
  },
  {
    path: '*',
    redirect: '404'
  }
];

export default routes;
