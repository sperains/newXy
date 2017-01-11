

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import  {Router , Route , IndexRoute , Redirect} from 'react-router';
import createHistory from 'history/lib/createHashHistory';
import Main from './containers/Main';
import store from './store.js';
import {Training} from './components/training';
import {Active } from './components/active';





let root = $('#container')[0];

const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
    	<Router history={history}>
    		<Route  path="/" component={Main}>
    			<Route path="train" component={Training} />
    			<Route path="active" component={Active} />
    		</Route>
    	</Router>
    </Provider>,
    root
);