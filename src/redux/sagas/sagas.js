import { takeEvery, all } from 'redux-saga/effects'
import * as actionTypes from '../actions/action_types'
import { requestCompanyInfoSaga } from './spaceXData'

export function* fetchCompanyInfoFromAPI() {
  yield takeEvery(actionTypes.FETCH_COMPANY_INFO, requestCompanyInfoSaga)
}

function* rootSaga() {
  yield all([fetchCompanyInfoFromAPI()])
}

export default rootSaga
