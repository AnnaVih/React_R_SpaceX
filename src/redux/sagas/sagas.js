import { all } from 'redux-saga/effects'
import { watchFetchCompanyInfo } from './watcher'

function* rootSaga() {
  yield all([watchFetchCompanyInfo()])
}

export default rootSaga
