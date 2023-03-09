import { Item } from './others';

export interface IResultsList {
  loading: boolean;
  list: Item[];
  count: number;
  page: number;
  allPages: number;
  incompleteResults: boolean;
}
