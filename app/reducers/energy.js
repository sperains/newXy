
import createReducer from '../utils/createReducer';
import {actionTypes} from '../constants';

const initialState = {
	isRequest : false,
	ruleList : [],
	currentRule : {
	}
}

const energyReducerHandlers = {
	[actionTypes.energy.getRuleList] : (state,action)=>{
		return {isRequest : true , ruleList : action.ruleList }
	},
	[actionTypes.energy.deleteRule] : (state,action)=>{
		let ruleList = state.ruleList;
		ruleList.splice(action.index , 1);
		return {isRequest : true , ruleList : [...ruleList]}
	},
	[actionTypes.energy.ruleStateChange] : (state,action)=>{
		let ruleList = state.ruleList;
		ruleList.forEach( (rule,index)=>{
			if(index==action.index){
				rule.isOpen = !rule.isOpen
			}
		})
		return {ruleList : [...ruleList]}
	},
	[actionTypes.energy.getCurrentRule] : (state,action)=>{
		let currentRule = action.index != 'undefined' ? state.ruleList[action.index] : initialState.currentRule;
		return {currentRule}
	}
}

export default createReducer(initialState,energyReducerHandlers)

