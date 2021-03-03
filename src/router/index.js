import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AdminLoginPage from '../pages/AdminLogin';
import PlayerLogin from '../pages/PlayerLogin';

const router = () => (
  <Router>
    <Switch>
      <Route path="/admin" component={AdminLoginPage} />
      <Route path="/" component={PlayerLogin} />
    </Switch>
  </Router>
);
export default router;
