import React from 'react'
import { connect } from 'react-redux'

class TodoList extends React.Component {
    render() {
        var todos = this.props.todos.filter((todo) => {
            if (this.props.filter === "COMPLETED" && todo.completed === false) {
            }
            else if (this.props.filter === "PENDING" && todo.completed === true) {
            }
            else {
                return true
            }
        }
        )
        todos = todos.sort(function (a, b) {
            var value1 = a.value.toLowerCase(), value2 = b.value.toLowerCase()
            if (value1 < value2) //sort string ascending
                return -1
            if (value1 > value2)
                return 1
            return 0 //
        })
        if (this.props.filter === "ALL") {
            var t1 = this.props.todos.filter((todo) => {
                if ( todo.completed === false) {
                    return true
                }
            })
            var t2 = this.props.todos.filter((todo) => {
                if ( todo.completed === true) {
                    return true;
                }
            })
            t1 = t1.sort(function (a, b) {
                var value1 = a.value.toLowerCase(), value2 = b.value.toLowerCase()
                if (value1 < value2) //sort string ascending
                    return -1
                if (value1 > value2)
                    return 1
                return 0 //
            });
            t2 = t2.sort(function (a, b) {
                var value1 = a.value.toLowerCase(), value2 = b.value.toLowerCase()
                if (value1 < value2) //sort string ascending
                    return -1
                if (value1 > value2)
                    return 1
                return 0 //
            });
            // console.log(t1)
            // console.log(t2)
            todos = t1.concat(t2)
        }



        const number = todos.length

        return [<div>
            <p>Number of todos: {number}</p>
            <p>{todos.map((todo) => <p key={todo.value}>
                {todo.value}
                <input type="checkbox" checked={todo.completed} onChange={() => this.props.checkbox(todo.value)} />
                <button type="cancel" onClick={() => this.props.DeleteTodo(todo.value)} >delete</button>
                {console.log(this.props.filter)}
            </p>)}
            </p></div>
        ]
    }
}
const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        filter: state.Filter,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        checkbox: todo => {
            dispatch({ type: "handleCheck", value: todo })
        },
        DeleteTodo: todo => {
            dispatch({ type: "DELETE_TODO", value: todo })
        },
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)