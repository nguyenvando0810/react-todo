import * as type from './../constants/actionType'

const initialState = ''

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SEARCH:
      return action.search

    default:
      return state
  }
}

export default reducer