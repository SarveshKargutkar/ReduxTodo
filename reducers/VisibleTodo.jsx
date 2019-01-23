// import store from '../store'
// const todo=store.getState();
// console.log(todo)
const VisibleTodo = (state =[], action) => {
    // console.log(state)
    switch (action.type) {
        case 'FILTER_TODO':
        console.log(action.value)
            return state=action.value;
        default:
            return state

    }
}
export default VisibleTodo