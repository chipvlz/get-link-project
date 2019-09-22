import {
  GET_LINK_REQUEST,
  GET_LINK_SUCCEED,
  GET_LINK_FAILED,
} from '../actionTypes/server-response';

export interface GetLinkRequestType {
  type: typeof GET_LINK_REQUEST;
  url: string;
}

export const getLinkRequest = (url): GetLinkRequestType => ({
  type: GET_LINK_REQUEST,
  url,
});

export interface ResponseType {
  both: null | {
    format: string;
    url: string;
    ext: string;
    [otherInfo: string]: any;
  };
  video: null | {
    format: string;
    url: string;
    ext: string;
    [otherInfo: string]: any;
  };
  audio: null | {
    format: string;
    url: string;
    ext: string;
    abr: number;
    [otherInfo: string]: any;
  };
}
export interface GetLinkSucceedType {
  type: typeof GET_LINK_SUCCEED;
  response: ResponseType;
}

export const getLinkSucceed = (response): GetLinkSucceedType => ({
  type: GET_LINK_SUCCEED,
  response,
});

export interface GetLinkFailedType {
  type: typeof GET_LINK_FAILED;
  error:
    | {
        errMessage: string;
      }
    | { [errorProp: string]: any };
}

export const getLinkFailed = (error): GetLinkFailedType => ({
  type: GET_LINK_FAILED,
  error,
});
