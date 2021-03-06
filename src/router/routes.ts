import { RouteConfig } from 'vue-router';
import Configurations from '@/core/configurations';

const routes: RouteConfig[] = [
  // Always leave this as last one,
  // but you can also remove it
  { path: '/', redirect: Configurations.initialRoutePath },
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
