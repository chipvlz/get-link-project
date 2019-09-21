import { SEARCH_BOX_CHANGE_VALUE } from '../actionTypes/search-box-value';

export interface SearchBoxChangeValueType {
  type: typeof SEARCH_BOX_CHANGE_VALUE;
  value: string;
}

export const searchBoxChangeValue = (
  value: string
): SearchBoxChangeValueType => ({
  type: SEARCH_BOX_CHANGE_VALUE,
  value,
});
