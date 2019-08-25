import * as type from './../constants/actionType'

const initialState = {
  by: 'name',
  value: -1
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SORT:
      return action.sort
    default:
      return state
  }
}

export default reducer