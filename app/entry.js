

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import  {Router , Route , IndexRoute , Redirect , hashHistory} from 'react-router';
import Main from './containers/Main';
import store from './store.js';
import {Training} from './components/training';
import {Active , ActiveEdit } from './components/active';
import {UserAuthWrapper} from 'redux-auth-wrapper'

let root = $('#container')[0];


const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.user,
    predicate: user => user && user.id,
    authenticatingSelector: state => state.user.isAuthenticating,
    // LoadingComponent: LoadingPage,
    wrapperDisplayName: 'UserIsAuthenticated'
})

const UserIsNotAuthenticated = UserAuthWrapper({
    authSelector: state => state.user,
    predicate: user => !user || !user.id,
    wrapperDisplayName: 'UserIsNotAuthenticated',
    failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || 'mine/archive',
    allowRedirectBack: false
})

    // <Route path="login" component={UserIsNotAuthenticated(Login)}/>
    // <Route component={UserIsAuthenticated((props) => props.children)}>

ReactDOM.render(
    <Provider store={store}>
    	<Router history={hashHistory}>
    		<Route  path="/" component={Main}>
    			<Route path="/train" component={Training} />
    			<Route path="active" component={Active} />
    			<Route path="active-edit" component={ActiveEdit} />
    		</Route>
    	</Router>
    </Provider>,
    root
);