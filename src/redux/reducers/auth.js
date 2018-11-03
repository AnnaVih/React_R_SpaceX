import * as actionTypes from '../actions/action_types'

const initialState = {
  isAuth: true
}

const reducer = (state = initialState, action) => {
  switch (action && action.type) {
    case actionTypes.LOGOUT:
      return {
        ...state,
        isAuth: false
      }
    default:
      return state
  }
}
export default reducer
