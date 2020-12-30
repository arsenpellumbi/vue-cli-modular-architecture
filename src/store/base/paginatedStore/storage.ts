import { computed, ComputedRef } from '@vue/composition-api';
import { AppStoreState } from '@/store';
import { Store } from 'vuex';
import useFetchingStore, { FetchingStorage } from '../fetchingStore/storage';
import { Pagination } from '@/core/types';

export interface PaginatedStorage extends FetchingStorage {
  readonly currentPagination: ComputedRef<Pagination>;
}

export default function usePaginatedStore(store: Store<AppStoreState>, namespace: string): PaginatedStorage {
  return {
    ...useFetchingStore(store, namespace),
    currentPagination: computed(
      () => (store.getters as { [key: string]: Pagination })[`${namespace}/currentPagination`]
    )
  };
}
