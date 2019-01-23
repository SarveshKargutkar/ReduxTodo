const Todo = (state = [], action) => {
  // console.log("h12")
  switch (action.type) {
    case 'ADD_TODO':

      return [
        ...state,
        {
          value: action.value,
          completed: false
        }
      ]
    case 'handleCheck':
      return state.map(
        todo =>
          todo.value === action.value ? { ...todo, completed: !todo.completed } : todo
      )
    
    case 'DELETE_TODO':
      console.log(action.value)
      return state.filter(
        todo => {
          if (todo.value === action.value)
            return false
          else
            return true
        }
      )

    default:
      return state
  }
}
export default Todo
