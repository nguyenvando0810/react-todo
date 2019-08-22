import * as type from '../constants/actionType'

var initialState = {
  status: false,
  sort: {
    by: 'name',
    value: 1
  }
}

var reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CHANGE_STATUS:
      state.status = !state.status
      break;

    case type.SORT:
      let { by, value } = action.sort
      let {status} = state

      return {
        sort: {
          by: by,
          value: value,
        },
        status: status
      }

    default:
      break;
  }
  return state
}

export default reducer