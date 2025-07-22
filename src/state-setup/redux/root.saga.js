import { takeEvery, all } from 'redux-saga/effects';
import userAuthSaga from '@redux/auth/auth.saga';

function* sampleSaga() {
  yield Promise.resolve('Sample Saga Triggered');
  console.log('Sample Saga Executed');
}

export default function* rootSaga() {
  yield all([
    ...userAuthSaga,
    takeEvery('SAMPLE_ACTION_TRIGGERS_SAGA', sampleSaga),
  ]);
}
