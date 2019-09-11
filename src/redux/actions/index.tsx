import { SEARCH_BOX_CHANGE_VALUE, OPEN_DRAWER } from '../actionTypes';

export interface OpenCloseDrawerInterface {
  type: typeof OPEN_DRAWER | typeof CLOSE_DRAWER;
}
export interface SearchBoxChangeValueInteface {
  type: typeof SEARCH_BOX_CHANGE_VALUE;
  value: string;
}

export const searchBoxChangeValue: SearchBoxChangeValueInteface = (
  value: string
) => ({
  type: SEARCH_BOX_CHANGE_VALUE,
  value,
});

export const openDrawer: OpenCloseDrawerInterface = () => ({
  type: OPEN_DRAWER,
});

export const closeDrawer: OpenCloseDrawerInterface = () => ({
  type: CLOSE_DRAWER,
});
