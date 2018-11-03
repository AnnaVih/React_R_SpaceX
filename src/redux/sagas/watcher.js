import { takeEvery } from 'redux-saga/effects'
import * as actionTypes from '../actions/action_types'
import { requestCompanyInfoSaga } from './spaceXData'

export function* watchFetchCompanyInfo() {
  yield takeEvery(actionTypes.FETCH_COMPANY_INFO, requestCompanyInfoSaga)
}
