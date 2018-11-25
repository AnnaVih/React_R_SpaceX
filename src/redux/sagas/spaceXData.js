import { put } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from '../actions/index'

export const ROOT_DATA = 'https://api.spacexdata.com/v2'

export function* requestCompanyInfoSaga({ queryParam }) {
  try {
    const infoUrl = `${ROOT_DATA}${queryParam}`
    const requestedData = yield axios.get(infoUrl)
    yield put(actions.displayCompanyInfo(requestedData.data))
  } catch (err) {
    yield put(actions.displayCompanyInfoFailed())
  }
}
