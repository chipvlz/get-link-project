import { OPEN_DRAWER, CLOSE_DRAWER } from '../actionTypes/drawer';
import { DrawerActionType } from '../actions/drawer';

export interface DrawerStateType {
  isOpen: boolean;
  showIcon: boolean;
}

const drawer = (
  state = { isOpen: false, showIcon: false },
  action: DrawerActionType
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
    default:
      return state;
  }
};

export default drawer;
