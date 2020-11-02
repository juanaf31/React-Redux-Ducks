import { combineReducers } from 'redux';
import PeopleReducer from './people';

import testItemReducer from './testitem';

export default combineReducers({
  // testItem: testItemReducer
  people : PeopleReducer
});
