
const actionTypes = {
    activity:{
        add:'ADD_ACTIVE_LIST',
        delete:'DELETE_ACTIVE'
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