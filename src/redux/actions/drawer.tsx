import { OPEN_DRAWER, CLOSE_DRAWER } from '../actionTypes/drawer';

export interface DrawerActionType {
  type: typeof OPEN_DRAWER | typeof CLOSE_DRAWER;
}

export const openDrawer = (): DrawerActionType => ({
  type: OPEN_DRAWER,
});

export const closeDrawer = (): DrawerActionType => ({
  type: CLOSE_DRAWER,
});
