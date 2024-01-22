import { combineReducers } from 'redux';
import todos from './actions';

const rootReducer = combineReducers({
  todos
});

export default rootReducer;