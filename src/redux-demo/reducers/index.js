import sort from "./sort";
import status from "./status";
import { combineReducers } from 'redux'

const reducer = combineReducers({
  sort,
  status
})

export default reducer