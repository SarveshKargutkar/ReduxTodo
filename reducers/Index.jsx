import { combineReducers } from 'redux'
import todos from './todos'
import text from './text'
import Filter from './VisibleTodo'
export default combineReducers({
  todos,
  text,
  Filter,
})