import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
  SHOW_ICON,
  HIDE_ICON,
} from '../actionTypes/drawer';

export interface DrawerActionType {
  type: typeof OPEN_DRAWER | typeof CLOSE_DRAWER;
}
export interface IconDrawerActionType {
  type: typeof SHOW_ICON | typeof HIDE_ICON;
}

export const openDrawer = (): DrawerActionType => ({
  type: OPEN_DRAWER,
});

export const closeDrawer = (): DrawerActionType => ({
  type: CLOSE_DRAWER,
});
export const showIcon = (): IconDrawerActionType => ({
  type: SHOW_ICON,
});

export const hideIcon = (): IconDrawerActionType => ({
  type: HIDE_ICON,
});
