import React from 'react';
import { Provider } from 'react-redux';

import TestItem from './components/TestItem';

import { store } from './redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TestItem/>
      </div>
    </Provider>
  );
}

export default App;
