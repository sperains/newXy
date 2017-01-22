
const actionTypes = {
    activity:{
        getList:'GET_ACTIVITY_LIST',
        add : 'ADD_ACTIVITY',
        delete:'DELETE_ACTIVITY',
        releaseStateChange : 'ACTIVITY_RELEASE_STATE_CHANGE',
        getEnrollList : 'GET_ACTIVITY_ENROLL_LIST',
        current : 'GET_CURRENT_ACTIVITY'
    },
    energy : {
    	  getRuleList:'GET_RULE_LIST',
    	  addRule:'ADD_RULE',
    	  deleteRule:'DELETE_RULE',
    	  ruleStateChange : 'RULE_STASTE_CHANGE',
               getCurrentRule : 'GET_CURRENT_RULE'
    },
    user:{
        login:'user$$login',
        logout:'user$$logout'
    }
}

export default actionTypes