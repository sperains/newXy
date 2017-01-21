

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import  {Router , Route , IndexRoute , Redirect , hashHistory} from 'react-router';
import Main from './containers/Main';
import store from './store.js';
import {Training , TraningItemEdit} from './components/training';
import {Active , ActiveEdit , ActiveEnrollList } from './components/active';
import {Member} from './components/member'; 
import {Number } from './components/number';
import {Identity , IdentityEdit} from './components/identity';
import { EnergyRule , EnergyRank , EnergyRuleEdit} from './components/energy';
import {Feedback} from './components/feedback';
import {Donation} from './components/donation';
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
                  <Route path="" component={Training} />
		     <Route path="/train" component={Training}/>
    		     <Route path="/active" component={Active} />
    		     <Route path="/active-edit" component={ActiveEdit} />
                  <Route path="/train-edit" component={TraningItemEdit} />
                  <Route path="/active-detail" component={ActiveEnrollList} />
                  <Route path="/number" component={Number} />
                  <Route path="/member" component={Member} />
                  <Route path="/energy-rule" component={EnergyRule} />
                  <Route path="/energy-rule/edit" component={EnergyRuleEdit} />
                  <Route path="/energy-rank" component={EnergyRank} />
                  <Route path="/identity" component={Identity} />
                  <Route path="/identity/:type" component={IdentityEdit} />
                  <Route path="/feedback" component={Feedback} />
                  <Route path="/donation" component={Donation} />
                  
    		</Route>
    	</Router>
    </Provider>,
    root
);