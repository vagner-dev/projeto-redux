import types from './types';
interface GlobalState {
  isLogin: boolean;
  data: any;
}
interface Action {
  type: string;
  payload: any;
}
const initialState: GlobalState = {
  isLogin: false,
  data: {},
};
export default function (state = initialState, action: Action) {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, isLogin: action.payload };
    case types.LOGOUT:
      return { ...state, isLogin: action.payload };
    case types.REQUEST_DATA:
      return { ...state, data: action.payload };
    case types.GET_REQUEST:
      return state;
    default:
      return state;
  }
}
