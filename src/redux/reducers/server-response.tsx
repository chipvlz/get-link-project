import {
  GET_LINK_SUCCEED,
  GET_LINK_FAILED,
  GET_LINK_REQUEST,
} from '../actionTypes/server-response';
import {
  GetLinkFailedType,
  GetLinkRequestType,
  GetLinkSucceedType,
  ResponseType,
} from '../actions/server-response';

export type ServerResponseType = {
  isFetching: boolean;
  url: string;
  response: null | ResponseType;
  error: null | { errMessage: string } | { [errProp: string]: any };
};

type ServerResponseActionType =
  | GetLinkSucceedType
  | GetLinkRequestType
  | GetLinkFailedType;

const serverResponse = (
  state: ServerResponseType = {
    isFetching: false,
    url: '',
    response: null,
    error: null,
  },
  action: ServerResponseActionType
): ServerResponseType => {
  switch (action.type) {
    case GET_LINK_REQUEST:
      return {
        ...state,
        isFetching: true,
        url: action.url,
        response: null,
        error: null,
      };
    case GET_LINK_SUCCEED:
      return {
        ...state,
        isFetching: false,
        response: action.response,
      };
    case GET_LINK_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default serverResponse;
