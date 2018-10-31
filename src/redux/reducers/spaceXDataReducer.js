import * as actionTypes from '../actions/action_types'

const initialState = {
  companyInfo: [],
  error: false
}
const reducer = (state = initialState, action) => {
  switch (action && action.type) {
    case actionTypes.DISPLAY_COMPANY_INFO:
      return {
        ...state,
        companyInfo: action.payload,
        error: false
      }
    case actionTypes.DISPLAY_COMPANY_INFO_FAILED:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}

export default reducer
