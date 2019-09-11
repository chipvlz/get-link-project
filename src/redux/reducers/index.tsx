import { SEARCH_BOX_CHANGE_VALUE, OPEN_DRAWER } from '../actionTypes';
import {
  OpenCloseDrawerInterface,
  SearchBoxChangeValueInteface,
} from '../actions';

export interface IndexReducerStateInterface {
  searchBoxValue: string;
  isOpenDrawer: boolean;
}
export type IndexActionInterface =
  | OpenCloseDrawerInterface
  | SearchBoxChangeValueInteface;

const index: IndexReducerStateInterface = (
  state = {
    searchBoxValue: '',
    isOpenDrawer: false,
  },
  action: IndexActionInterface
) => {
  switch (action.type) {
    case SEARCH_BOX_CHANGE_VALUE:
      return {
        ...state,
        searchBoxValue: action.value,
      };
    case OPEN_DRAWER:
      return {
        ...state,
        isOpenDrawer: true,
      };
    default:
      return state;
  }
};

export default index;
