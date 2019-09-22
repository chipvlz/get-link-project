import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import {
  getLinkSucceed,
  getLinkFailed,
  GetLinkRequestType,
} from '../actions/server-response';
import { GET_LINK_REQUEST } from '../actionTypes/server-response';
import { showIcon, hideIcon } from '../actions/drawer';

export function* getLink(action: GetLinkRequestType): any {
  try {
    const { data: response } = yield call(
      axios.post as any,
      process.env.GATSBY_BACKEND_URL,
      {
        url: action.url,
      }
    );
    yield put(getLinkSucceed(response));
    yield put(showIcon());
  } catch (err) {
    yield put(
      getLinkFailed(JSON.stringify(err, Object.getOwnPropertyNames(err)))
    );
    yield put(hideIcon());
  }
}
export default function* watchGetLink(): any {
  yield takeLatest(GET_LINK_REQUEST, getLink);
}
