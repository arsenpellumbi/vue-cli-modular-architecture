import Vue from 'vue';

import '@/styles/quasar.scss';
import 'quasar/dist/quasar.ie.polyfills';
import iconSet from 'quasar/icon-set/mdi-v4.js';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/mdi-v4/mdi-v4.css';
import { Quasar, Notify, LoadingBar } from 'quasar';

export default function() {
  Vue.use(Quasar, {
    config: {
      notify: {
        /* look at QUASARCONFOPTIONS from the API card (bottom of page) */
        position: 'bottom',
        progress: true,
        actions: [
          {
            label: 'Dismiss',
            color: 'white',
            handler: () => {
              /* ... */
            }
          }
        ]
      }
    },
    plugins: {
      Notify,
      LoadingBar
    },
    iconSet: iconSet
  });
}
