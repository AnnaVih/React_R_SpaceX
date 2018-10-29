import * as actionTypes from './action_types'

export const fetchCompanyInfo = queryParam => ({
  type: actionTypes.FETCH_COMPANY_INFO,
  queryParam
})

export const displayCompanyInfo = companyInfo => ({
  type: actionTypes.DISPLAY_COMPANY_INFO,
  payload: companyInfo
})

export const displayCompanyInfoFailed = () => ({
  type: actionTypes.DISPLAY_COMPANY_INFO_FAILED
})
