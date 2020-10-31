import { combineReducers } from 'redux';

import testItemReducer from './testitem';

export default combineReducers({
  testItem: testItemReducer
});
