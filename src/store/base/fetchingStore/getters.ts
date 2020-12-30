import { AppStoreState } from '@/store';
import { GetterTree } from 'vuex';
import { FetchingStoreState } from './state';

const getters: GetterTree<FetchingStoreState, AppStoreState> = {
  fetching(state: FetchingStoreState): boolean {
    return state.fetching;
  }
};

export default getters;
