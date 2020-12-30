import { ComponentOptions, VueConstructor } from 'vue';
import { RawLocation, VueRouter } from 'vue-router/types/router';

export interface PluginParams<TStore> {
  app: ComponentOptions<Vue>;
  Vue: VueConstructor;
  router: VueRouter;
  store: TStore;
  urlPath: string;
  publicPath: string;
  redirect: (url: string | RawLocation, httpStatusCode?: number) => void;
}
