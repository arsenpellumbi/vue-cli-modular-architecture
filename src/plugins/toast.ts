import { PluginParams } from '@/core/types';
import toastHelper, { ToastHelper } from '../core/helpers/ToastHelper';

declare module 'vue/types/vue' {
  interface Vue {
    $toast: ToastHelper;
  }
}

export default function<TStore>({ Vue }: PluginParams<TStore>) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Vue.prototype.$toast = toastHelper;
}
