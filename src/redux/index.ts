import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

let initialState: any = {};

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools()
);
