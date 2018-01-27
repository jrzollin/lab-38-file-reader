import {combineReducers} from 'redux';

import logInReducer from '../components/login/log-in-reducer.js';
import listReducer from '../components/list/list-reducer.js';

export default combineReducers({
  users: logInReducer,
  items: listReducer,
});
