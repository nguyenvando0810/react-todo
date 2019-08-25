import * as type from '../constants/actionType'

var initialState = {
    by: 'name',
    value: 1
}

var reducer = (state = initialState, action) => {
  if(action.type === type.SORT) {
    let { by, value } = action.sort

    return {
      by: by,
      value: value,
    }
  }
  return state
}

export default reducer