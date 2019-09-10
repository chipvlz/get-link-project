import { SEARCH_BOX_CHANGE_VALUE } from '../actionTypes';

const index = (state = { searchBoxValue: '' }, action) => {
  switch (action.type) {
    case 'SEARCH_BOX_CHANGE_VALUE':
      return {
        ...state,
        searchBoxValue: action.value,
      };
    default:
      return state;
  }
};

export default index;
