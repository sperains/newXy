/**
 * Created by Itachi on 2017/1/13.
 */

import createReducer from '../utils/createReducer'
import {actionTypes} from '../../constants'

/*
* reducer函数集
* */
const activityReducerHandlers = {
    [actionTypes.activity.add] : (state,action) => {
        return {activeList:action.activeList}
    }
}

export default createReducer({},activityReducerHandlers)
