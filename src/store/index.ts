import { VueConstructor } from 'vue/types/umd';
import Vuex from 'vuex';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface AppStoreState {
  version: number;
}

export default function({ Vue }: { Vue: VueConstructor }) {
  Vue.use(Vuex);

  const store = new Vuex.Store({
    state: {
      version: 1
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  });

  return store;
}
