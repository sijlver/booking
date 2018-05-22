import { combineReducers } from 'redux';

import hotelsReducer from './hotelsReducer';
import commonReducer from './commonReducer';

export default combineReducers({
    hotelsReducer,
    commonReducer,
});
