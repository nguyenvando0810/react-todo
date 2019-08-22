import * as type from './../constants/actionType'

export const status = () => {
  return {
    type: type.CHANGE_STATUS
  }
}

export const sort = (sort) => {
  return {
    type: type.SORT,
    sort: sort
  }
}