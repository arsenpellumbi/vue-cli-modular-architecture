/* eslint-disable @typescript-eslint/no-explicit-any */
import { PluginParams } from '@/core/types';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import apiInterceptors from '../core/api/api-interceptors';

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
  }
}

export default function<TStore>({ router, store, Vue }: PluginParams<TStore>) {
  axios.defaults.headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  };

  axios.interceptors.request.use(
    async (config: AxiosRequestConfig) => await apiInterceptors.handleRequest(store as any, config),
    async (error: AxiosError) => await apiInterceptors.handleRequestError(error)
  );

  axios.interceptors.response.use(
    async (response: AxiosResponse) => await apiInterceptors.handleResponse(response),
    async (error: AxiosError) => await apiInterceptors.handleResponseError(router, error)
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Vue.prototype.$axios = axios;
}
