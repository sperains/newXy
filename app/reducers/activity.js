/**
 * Created by Itachi on 2017/1/13.
 */

import createReducer from '../utils/createReducer'
import {actionTypes} from '../constants'

const initialState = {
	isRequest:false,
	data:[]
}

/*
* reducer函数集
* */
const activityReducerHandlers = {
    [actionTypes.activity.add] : (state,action) => {
        return {isRequest:true,data:action.activeList}
    },
    [actionTypes.activity.delete] : (state,action)=>{
    	let activeList = state.data;
      	activeList.splice(action.index , 1);
      	return {isRequest:true,data:[...activeList]};
    }
}

export default createReducer(initialState,activityReducerHandlers)
