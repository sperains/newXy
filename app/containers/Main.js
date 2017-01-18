
import React , { Component , PropTypes } from 'react' ;
import { connect } from 'react-redux';
import { addTodo , completeTodo , setVisibilityFilter , VisibilityFilters} from '../actions/actions';
import AddTodo from '../components/AddTodo';
import TopBar from '../components/TopBar';
import Sider from '../components/Sider';
import {hashHistory} from 'react-router';
import {Active , ActiveEdit } from '../components/active';
import './app.css';
import './main.css';

class Main extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {


    }

    componentWillUnmount() {
        // this.editorObj.destroy();
    }

// {this.props.children}
    render(){
        const { dispatch } = this.props;
        return (
            <div className="wrap">
                <TopBar />
                <div className="content">
                    <Sider />
                    <div className="right-wrap" id="right-wrap">
                       
                       {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
    }
}

function select(state) {
    return {
        visibleTodos : selectTodos(state.todos , state.visibilityFilter),
        visibilityFilter : state.visibilityFilter
    }
}

export  default connect(select)(Main);




