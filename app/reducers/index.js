
import {combineReducers} from 'redux' ;
import activity  from './activity';
import energy from './energy';


const rootReducers = combineReducers({
    activity , energy
});

export {rootReducers} ;