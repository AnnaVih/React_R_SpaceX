import axios from 'axios'

import * as actionTypes from './action_types'

export const ROOT_DATA = 'https://api.spacexdata.com/v2'

export const fetchSpaceXCompanyData = queryParam => {
  const infoUrl = `${ROOT_DATA}${queryParam}`
  const request = axios.get(infoUrl)

  return {
    type: actionTypes.FETCH_COMPANY_DATA,
    payload: request
  }
}