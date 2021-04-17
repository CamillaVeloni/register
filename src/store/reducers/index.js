import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

// Root Reducer 
export default combineReducers({
    Auth: AuthReducer,
});
