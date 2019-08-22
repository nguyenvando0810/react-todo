import { createStore } from 'redux'
import { status, sort } from './action/action'
import reducer from './reducers/index'

const store = createStore(reducer) //Khởi tạo store, tham số truyền vào của hàm createStore phải là reducer
console.log('state default ', store.getState()) //Chỉ có thể truy cập vào state bằng store.getState()

store.dispatch(status())
store.dispatch(sort({by: 'name', value: -1}))
console.log('state sort', store.getState())