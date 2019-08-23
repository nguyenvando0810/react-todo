import * as type from './../constants/actionType'

const initialState = {
  id: '',
  name: '',
  status: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.UPDATE_TODO:
      state = action.todo
      return state;
    default:
      return state;
  }
}

export default reducer