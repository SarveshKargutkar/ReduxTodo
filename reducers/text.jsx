// import store from '../store'
// const state=store.getState();   
const text = (state = "", action) => {
    // console.log("h1")
    switch (action.type) {
        case 'ADD_TEXT':
            return (
                state = action.value
            )
        case 'REMOVE_TEXT':
            return (
                state = ''
            )
        default:
            return state

    }
}
export default text