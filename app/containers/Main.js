
import React , { Component , PropTypes } from 'react' ;
import { connect } from 'react-redux';
import { addTodo , completeTodo , setVisibilityFilter , VisibilityFilters} from '../actions/actions';
import AddTodo from '../components/AddTodo';
import TopBar from '../components/TopBar';
import Sider from '../components/Sider';
import { Training } from '../components/training';

import './app.css';
import './main.css';

class Main extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        // let Editor = require('medium-editor');

        // let editorObj = new Editor('.editable'  ,{
        //     buttonLabels: 'fontawesome',
        //     toolbar: {
        //         buttons: ['bold', 'italic', 'quote' , 'justifyLeft' , 'justifyCenter'],
        //         diffLeft: 25,
        //         diffTop: 10,
        //     },
        //     placeholder: {
        //      This example includes the default options for placeholder,
        //     if nothing is passed this is what it used 
        //         text: '请输入内容...',
        //         hideOnClick: false
        //     }
        // })

        // console.log(editorObj);

        // editorObj.setContent(`<p>hahahah</p>`)
        // this.editorObj = editorObj;

        // editorObj.subscribe('editableInput', function (event, editable) {
        //     // Do some work
        //     console.log(editable);
        // });

    }

    componentWillUnmount() {
        // this.editorObj.destroy();
    }

    render(){
        const { dispatch } = this.props;
        return (
            <div className="wrap">
                <TopBar />
                <div className="content">
                    <Sider />
                    <div className="right-wrap" id="right-wrap">
                        <Training />
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




