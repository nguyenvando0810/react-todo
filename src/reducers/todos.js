import * as type from './../constants/actionType'

const data = JSON.parse(localStorage.getItem('todos'))

const initialState = data ? data : []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_LIST:
      return state

    case type.ADD_TODO:

      if (!action.todo.name) {
        return state
      }

      if (!action.todo.id) {
        const todo = {
          id: Date.now(),
          name: action.todo.name,
          status: action.todo.status
        }

        state = [...state, todo]
      } else {
        let indexTodoEdit = state.findIndex(todo => todo.id === action.todo.id)
        state[indexTodoEdit] = action.todo
      }

      localStorage.setItem('todos', JSON.stringify(state))

      return state

    case type.DELETE_TODO:
      let newState = state.filter((todo) => {
        return todo.id !== action.id
      })

      state = [...newState]

      localStorage.setItem('todos', JSON.stringify(state))
      return state
    default:
      break;
  }

  return state
}

export default reducer