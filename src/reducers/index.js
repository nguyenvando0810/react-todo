import { combineReducers } from 'redux'
import todos from './todos'
import itemEditing from './itemEditting'

const reducer = combineReducers({
  todos,
  itemEditing
})

export default reducer