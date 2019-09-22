import { call, all } from 'redux-saga/effects';
import getLink from './get-link';

export default function* rootSaga(): any {
  yield all([call(getLink)]);
}
