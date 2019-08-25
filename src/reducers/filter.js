import * as type from './../constants/actionType'

const initialState = {
  name: '',
  status: -1
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FILTER_TODO:
      return action.filter
    default:
      return state
  }
}

export default reducer