

import loggerMiddleware from './middleware/logger';
import {createStore,applyMiddleware,compose} from 'redux';
import {rootReducers} from './reducers';

// 扩展createStore
var enhancerCreateStore = applyMiddleware(
    loggerMiddleware
)(createStore);

const store = enhancerCreateStore(rootReducers);

export default store;