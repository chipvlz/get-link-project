import { combineReducers } from 'redux';
import searchBoxValue from './search-box-value';
import drawer from './drawer';
import serverResponse from './server-response';

export default combineReducers({
  searchBoxValue,
  drawer,
  serverResponse,
});
