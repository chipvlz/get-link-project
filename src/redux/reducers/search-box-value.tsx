import { SEARCH_BOX_CHANGE_VALUE } from '../actionTypes/search-box-value';
import { SearchBoxChangeValueType } from '../actions/search-box-value';

const searchBoxValue = (
  state: string = '',
  action: SearchBoxChangeValueType
): string => {
  switch (action.type) {
    case SEARCH_BOX_CHANGE_VALUE:
      return action.value;
    default:
      return state;
  }
};

export default searchBoxValue;
