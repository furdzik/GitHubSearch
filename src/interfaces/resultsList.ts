import { Item, ResponseElement } from './others';

export interface IResultsList {
  loading: boolean;
  list: Item[];
  count: number;
  page: number;
  allPages: number;
}

export interface SearchResultsReturns {
  count: number;
  list: ResponseElement[];
  page: number;
  allPages: number;
}

export interface SearchResultsArguments {
  value: string | null;
  page: number;
}
