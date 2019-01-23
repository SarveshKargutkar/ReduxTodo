import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom";
import history from './history';
import Todo from './components/Todo'
import store from './store'
import { Provider } from 'react-redux'

class Index extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route exact path='/' component={Todo} />
                </Router>
            </Provider>
        )
    }
}
ReactDOM.render( <Provider store={store}>
    <Index />
  </Provider>, document.getElementById('root'));