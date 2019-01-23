import React from 'react'
import TodoList from './TodoList';
import FilterTodo from './FilterTodo';
import { connect } from 'react-redux'


// var text = '';   
class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.props.AddText(e.target.value)
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.AddTodo({ type: 'ADD_TODO', value: this.props.text })
        this.props.RemoveText(" ")

    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} value={this.props.text} ></input>
                <button type="button" onClick={this.handleSubmit} >Add</button>
                <TodoList />
                <FilterTodo/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        text: state.text,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddTodo: todo => {
            dispatch({ type: "ADD_TODO", value: todo.value })
        },
        AddText: text => {
            dispatch({ type: "ADD_TEXT", value: text })
        },
        RemoveText: text => {
            dispatch({ type: "REMOVE_TEXT", value: text })
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)