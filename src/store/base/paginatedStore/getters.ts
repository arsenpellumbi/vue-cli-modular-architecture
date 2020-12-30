import { Pagination } from '@/core/types';
import { AppStoreState } from '@/store';
import { GetterTree } from 'vuex';
import { PaginatedStoreState } from './state';
import fetchingGetters from '../fetchingStore/getters';

const getters: GetterTree<PaginatedStoreState, AppStoreState> = {
  ...fetchingGetters,
  currentPagination(state: PaginatedStoreState): Pagination {
    return state.pagination;
  }
};

export default getters;
