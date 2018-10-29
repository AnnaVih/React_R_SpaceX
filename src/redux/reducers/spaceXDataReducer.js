import * as actionTypes from '../actions/action_types'

const initialState = {
  companyInfo: []
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_COMPANY_INFO:
      return {
        ...state,
        companyInfo: action.payload
      }
    default:
      return state
  }
}

export default reducer
