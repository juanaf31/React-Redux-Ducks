import React from 'react';
import { Provider } from 'react-redux';

import TestItem from './components/TestItem';
import Menubar from './components/Menubar'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import { store } from './redux';
import TablePage from './pages/TablePage';
import ChartPage from './pages/ChartPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Menubar />
          <Switch>
            <Route path="/table" component={TablePage}/>
            <Route path="/chart" component={ChartPage}/>
            <Redirect from="/" to="/table"/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
