import {combineReducers} from 'redux';

import logInReducer from '../components/login/log-in-reducer.js';

export default combineReducers({
  users: logInReducer,
});
