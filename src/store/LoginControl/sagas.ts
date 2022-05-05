import types from './types';
import {
  call,
  put,
  takeEvery,
  takeLatest,
  all,
} from '@redux-saga/core/effects';
import { GetDragons } from '../../services/dragons';
import { getData } from './actions';

function* getDragons(): any {
  try {
    const data = yield call(GetDragons);
    console.log('sagas', data.data);
    yield put(getData(data.data));
  } catch (e) {
    console.log(e);
  }
}

export default all([takeLatest(types.GET_REQUEST, getDragons)]);
