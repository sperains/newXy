

import loggerMiddleware from './middleware/logger';
import {createStore,applyMiddleware,compose} from 'redux';
import {rootReducers} from './reducers';
import persistState from 'redux-localstorage' // 本地缓存

/*这里填写需要做缓存的 reducer 名称 */
const persistedReducers = [
    'user'
];

// 扩展createStore
var enhancerCreateStore = compose(
    persistState(persistedReducers)
)(applyMiddleware(
    loggerMiddleware
)(createStore));

const store = enhancerCreateStore(rootReducers);

export default store;