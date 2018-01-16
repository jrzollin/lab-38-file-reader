import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import reducer from './reducer.js';
import reporter from './middleware/reporter.js';
import thunk from './middleware/thunk.js';

export default () => createStore(reducer, applyMiddleware(thunk, reporter));
