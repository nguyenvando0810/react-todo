import { combineReducers } from 'redux'
import todos from './todos'
import itemEditing from './itemEditting'
import filter from './filter'
import search from './search'
import sort from './sort'
const reducer = combineReducers({
  todos,
  itemEditing,
  filter,
  search,
  sort
})

export default reducer