import { moduleProvider } from '@/modules';
import { AppStoreState } from '@/store';
import VueRouter, { Route, RouteConfig, Location, RawLocation } from 'vue-router';
import { Store } from 'vuex';
import routes from './routes';
import navigationGuard from './navigation-guards';
import { VueConstructor } from 'vue/types/vue';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function({ store, Vue }: { store: Store<AppStoreState>; Vue: VueConstructor }) {
  Vue.use(VueRouter);

  const moduleRoutes: RouteConfig[] = moduleProvider.getRoutes();
  const definedRoutes = [...moduleRoutes, ...routes];
  const router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes: definedRoutes,
    mode: 'history'
  });

  router.beforeEach(
    async (to: Route, from: Route, next: (to?: Location | RawLocation | false | void) => void) =>
      await navigationGuard.beforeEach(store, to, from, next)
  );

  return router;
}
