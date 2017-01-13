/**
 * Created by Itachi on 2017/1/13.
 */

import createReducer from '../utils/createReducer'
import {actionTypes} from '../constants'


/*
* 用户初始化信息
* */
const initialState = {
    id:'',
    name:'',
    nickname:''
}

/*
 * reducer函数集
 * */
const activityReducerHandlers = {
    [actionTypes.user.login] : (state,action) => {
        return action.user
    },
    [actionTypes.user.logout] : (state,action) => {
        return {}
    }
}

export default createReducer(initialState,activityReducerHandlers)