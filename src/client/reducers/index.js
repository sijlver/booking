import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import checkboxReducer from './checkboxReducer';
import listPlayersReducer from './listPlayersReducer';

export default combineReducers({
    loginReducer,
    checkboxReducer,
    listPlayersReducer,
});
