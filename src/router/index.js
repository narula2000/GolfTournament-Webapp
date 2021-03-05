import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AdminLoginPage from '../pages/AdminLogin';
import PlayerLoginPage from '../pages/PlayerLoginPage';
import Sandbox from '../pages/Sandbox';

const router = () => (
  <Router>
    <Switch>
      <Route path="/admin" component={AdminLoginPage} />
      <Route path="/sandbox" component={Sandbox} />
      <Route path="/" component={PlayerLoginPage} />
    </Switch>
  </Router>
);
export default router;
