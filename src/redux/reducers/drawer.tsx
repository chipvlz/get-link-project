import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
  HIDE_ICON,
  SHOW_ICON,
} from '../actionTypes/drawer';
import { DrawerActionType, IconDrawerActionType } from '../actions/drawer';

export interface DrawerStateType {
  isOpen: boolean;
  showIcon: boolean;
}

const drawer = (
  state = { isOpen: false, showIcon: false },
  action: DrawerActionType | IconDrawerActionType
): DrawerStateType => {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        ...state,
        isOpen: true,
      };
    case CLOSE_DRAWER:
      return {
        ...state,
        isOpen: false,
      };
    case SHOW_ICON:
      return {
        ...state,
        showIcon: true,
      };
    case HIDE_ICON:
      return {
        ...state,
        showIcon: false,
      };
    default:
      return state;
  }
};

export default drawer;
