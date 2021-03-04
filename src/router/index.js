import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AdminLoginPage from '../pages/AdminLoginPage';
import HomePage from '../pages/HomePage';

const router = () => (
  <Router>
    <Switch>
      <Route path="/admin" component={AdminLoginPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>
);
export default router;
