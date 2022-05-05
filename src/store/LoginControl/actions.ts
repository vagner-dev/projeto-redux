import types from './types';
export function login(isLogin: boolean) {
  return {
    type: types.LOGIN,
    payload: isLogin,
  };
}

export function logout(isLogin: boolean) {
  return {
    type: types.LOGOUT,
    payload: isLogin,
  };
}

export function getData(data: any) {
  return {
    type: types.REQUEST_DATA,
    payload: data,
  };
}

export function getRequest() {
  return {
    type: types.GET_REQUEST,
    payload: '',
  };
}
