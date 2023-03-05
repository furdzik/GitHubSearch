import { Item } from './others';

export interface IResultsList {
  loading: boolean;
  idsList: number[];
  list: Item[];
  canLoadMore: boolean;
  limit: number;
}
