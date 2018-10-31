import * as actionTypes from '../actions/action_types'

const initialState = {
  companyInfo: [],
  error: false,
  loading: false
}
const reducer = (state = initialState, action) => {
  switch (action && action.type) {
    case actionTypes.FETCH_COMPANY_INFO:
      return {
        ...state,
        loading: true
      }
    case actionTypes.DISPLAY_COMPANY_INFO:
      return {
        ...state,
        companyInfo: action.payload,
        error: false,
        loading: false
      }
    case actionTypes.DISPLAY_COMPANY_INFO_FAILED:
      return {
        ...state,
        error: true,
        loading: false
      }
    default:
      return state
  }
}

export default reducer
