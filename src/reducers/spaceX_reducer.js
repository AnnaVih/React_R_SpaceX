import * as actionTypes from '../actions/action_types';

export default function(state = null, action) {
  switch (action.type) {
    case actionTypes.FETCH_COMPANY_DATA:
      return action.payload;
    default:
      return state;
  }
}
