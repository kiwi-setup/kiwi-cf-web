import {call, put, takeEvery} from 'redux-saga/effects';
import {getUserStatusApi, postLoginDetailsApi} from './auth.api';
import {
  GET_USER_STATUS,
  POST_LOGIN_DETAILS,
  POST_USER_LOGOUT,
} from './auth.action';
import {storage} from '@util';
import {setUserDetails} from './auth.slice';

function* getUserStatusSaga() {
  console.log('getUserStatus: from saga');
  try {
    const {data: response} = yield call(getUserStatusApi);
    console.log('GetUserStatus: resp: ', response);
    yield put(setUserDetails(response));
  } catch (e) {
    console.log('Err @getUserStatusSaga: ', e);
    yield put(setUserDetails(null));
  }
}

const samplePayload = {
  username: 'emmaj',
  password: 'emmajpass',
  expiresInMins: 2,
};
function* postLoginDetailsSaga({payload = samplePayload}) {
  try {
    console.log('postLoginDetailsSaga: ', payload);
    const {data: response} = yield call(postLoginDetailsApi, payload);
    yield put(setUserDetails(response));
    const {accessToken} = response;
    storage.set('USER_ACCESS_TOKEN', accessToken);
    yield call(getUserStatusSaga);
  } catch (e) {
    console.log('Err @postLoginDetailsSaga: ', e);
    yield put(setUserDetails(null));
  }
}

function* postLogoutSaga() {
  try {
    console.log('postLogoutSaga: ');
    storage.delete('USER_ACCESS_TOKEN');
    yield put(setUserDetails(null));
  } catch (e) {
    console.log('Err @postLogoutSaga: ', e);
    yield put(setUserDetails(null));
  }
}

export default [
  takeEvery(GET_USER_STATUS, getUserStatusSaga),
  takeEvery(POST_LOGIN_DETAILS, postLoginDetailsSaga),
  takeEvery(POST_USER_LOGOUT, postLogoutSaga),
];
