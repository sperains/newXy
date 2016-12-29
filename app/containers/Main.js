
import React , { Component , PropTypes } from 'react' ;
import { connect } from 'react-redux';
import { addTodo , completeTodo , setVisibilityFilter , VisibilityFilters} from '../actions/actions';
import AddTodo from '../components/AddTodo';
import TopBar from '../components/TopBar';
import Sider from '../components/Sider';
import {Editor, EditorState , RichUtils  , convertFromRaw,convertToRaw,CompositeDecorator,ContentState,Entity} from 'draft-js';
import ImageCrop from  '../components/imagecrop/ImageCrop';
import './app.css';
import './main.css';

class Main extends Component{

    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.onBoldClick = this.onBoldClick.bind(this);
    }

    componentDidMount() {
    }

    onBoldClick(){
        console.log(123);
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    handleKeyCommand(command) {
        console.log(command);
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    render(){
        const { dispatch } = this.props;
        return (
            <div className="wrap">
                <TopBar />
                <div className="content">
                    <Sider />
                    <div className="right-wrap">
                        <span onClick={this.onBoldClick}>加粗</span>
                        <Editor editorState={this.state.editorState} onChange={this.onChange} handleKeyCommand={this.handleKeyCommand} />
                        <ImageCrop />
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




