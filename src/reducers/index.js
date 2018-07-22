import { combineReducers } from 'redux'
import spaceX from './spaceX_reducer'

const rootReducer = combineReducers({
  spaceXinfo: spaceX
})

export default rootReducer
