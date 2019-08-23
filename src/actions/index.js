import * as type from './../constants/actionType'

export const list_all = () => {
  return {
    type: type.GET_LIST
  }
}

export const add_todo = (todo) => {
  return {
    type: type.ADD_TODO,
    todo: todo
  }
}

export const delete_todo = (id) => {
  return {
    type: type.DELETE_TODO,
    id: id
  }
}

export const update_todo = (todo) => {
  return {
    type: type.UPDATE_TODO,
    todo: todo
  }
}