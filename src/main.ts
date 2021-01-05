import Vue, { ComponentOptions } from 'vue';
import App from './app.vue';
import './registerServiceWorker';
import createRouter from './router';
import createStore from './store';

import bootCompositionapi from './plugins/composition-api';
import bootI18n from './plugins/i18n';
import bootAxios from './plugins/axios';
import bootToast from './plugins/toast';
import bootQuasar from './plugins/quasar';
import bootComponents from './plugins/components';
import { RawLocation } from 'vue-router/types/router';

Vue.config.devtools = true;
Vue.config.productionTip = false;

console.info('Running SPA.');
const publicPath = '/';

function start() {
  const store = typeof createStore === 'function' ? createStore({ Vue }) : createStore;
  const router = typeof createRouter === 'function' ? createRouter({ Vue, store }) : createRouter;

  const app: ComponentOptions<Vue> = {
    router,
    store,
    render: h => h(App)
  };

  let hasRedirected = false;
  const redirect = (url: string | RawLocation) => {
    hasRedirected = true;
    const normalized = Object(url) === url ? router.resolve(url).route.fullPath : url;

    window.location.href = normalized as string;
  };

  const urlPath = window.location.href.replace(window.location.origin, '');
  const bootFiles = [bootCompositionapi, bootI18n, bootAxios, bootToast, bootQuasar, bootComponents];

  for (let i = 0; hasRedirected === false && i < bootFiles.length; i++) {
    if (typeof bootFiles[i] !== 'function') {
      continue;
    }

    try {
      bootFiles[i]({
        app,
        router,
        store,
        Vue,
        redirect,
        urlPath,
        publicPath
      });
    } catch (err) {
      if (err && err.url) {
        window.location.href = err.url;
        return;
      }

      console.error('boot error:', err);
      return;
    }
  }

  if (hasRedirected) {
    return;
  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
}

start();
