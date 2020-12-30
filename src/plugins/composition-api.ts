import { PluginParams } from '@/core/types';
import VueCompositionApi from '@vue/composition-api';

export default function<TStore>({ Vue }: PluginParams<TStore>) {
  Vue.use(VueCompositionApi);
}
