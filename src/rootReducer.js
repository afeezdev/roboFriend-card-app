import { combineReducers } from 'redux';

import { requestRobots } from './redux/robotRequest/robotRequest.reducer';
import { searchRobots } from './redux/robotSearch/robotSearch.reducer';

const rootReducer = combineReducers({
  requestRobots,
  searchRobots
});

export default  rootReducer;
