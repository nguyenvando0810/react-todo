import * as type from '../constants/actionType'

var initialState = false

var reducer = (state = initialState, action) => {
  if (action.type === type.CHANGE_STATUS) {
    state = !state
    return state
  }
  return state
}

export default reducer