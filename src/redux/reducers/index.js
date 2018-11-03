import { combineReducers } from 'redux'
import spaceXData from './spaceXDataReducer'
import authenticate from './auth'

const rootReducer = combineReducers({
  spaceXData,
  authenticate
})

export default rootReducer
