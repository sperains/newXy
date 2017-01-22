/**
 * Created by Itachi on 2017/1/13.
 */

import createReducer from '../utils/createReducer'
import {actionTypes} from '../constants'

const initialState = {
	isRequest:false,
	list:[],
      current : {},
      enrollList :[]
}

/*
* reducer函数集
* */
const activityReducerHandlers = {
    [actionTypes.activity.getList] : (state,action) => {
        return {isRequest:true,list:action.activeList}
    },
    [actionTypes.activity.delete] : (state,action)=>{
    	let activeList = state.list;
      	activeList.splice(action.index , 1);
      	return {list:[...activeList]};
    },
    [actionTypes.activity.releaseStateChange] : (state,action)=>{
      // let activeList = [...state.list];
      // activeList[action.index] = Object.assign({} , activeList[action.index] );
      // activeList[action.index].release  = !activeList[action.index].release 
      let activeList = state.list;
      activeList[action.index].release = !activeList[action.index].release ? 1 : 0 
      return {list : [...activeList]}
    },
    [actionTypes.activity.getEnrollList] : (state,action)=>{
      return {enrollList : action.enrollList}
    },
    [actionTypes.activity.current] : (state,action)=>{
      let current = state.list[action.index];
      return {current}
    }
}

export default createReducer(initialState,activityReducerHandlers)
