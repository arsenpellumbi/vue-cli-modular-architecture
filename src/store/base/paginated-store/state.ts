import { Pagination } from '@/core/types';
import fetchingStoreState, { FetchingStoreState } from '../fetching-store/state';

export interface PaginatedStoreState extends FetchingStoreState {
  pagination: Pagination;
}

const state: PaginatedStoreState = {
  ...fetchingStoreState,
  pagination: {
    pageIndex: 0,
    pageSize: 12,
    totalCount: 0,
    totalPages: 0
  }
};

export default state;
