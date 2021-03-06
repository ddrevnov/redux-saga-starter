import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Main from './pages/Main';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Main} />
    </div>
  </Router>
);
