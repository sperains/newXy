import {combineReducers} from 'redux' ;
import { DELETE_ACTIVE , ADD_ACTIVE_LIST } from '../actions/active';


function active(state = [] , action){
    switch (action.type){
        case ADD_ACTIVE_LIST:
            return {
            		activeList : action.activeList
            } ;
        case DELETE_ACTIVE:
        	let activeList = state.activeList;
        	activeList.splice(action.index , 1);
        	return {
        		activeList : [...activeList]
        	};
        default :
            return state;
    }
}

export {active}


