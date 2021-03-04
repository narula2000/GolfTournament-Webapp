import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminHomePage from '../pages/AdminHomePage';
import AdminLoginPage from '../pages/AdminLoginPage';
import PlayerLoginPage from '../pages/PlayerLoginPage';

const router = () => (
  <Router>
    <Switch>
      <Route path="/admin/" component={AdminHomePage} />
      <Route path="/admin/login" component={AdminLoginPage} />
      <Route path="/" component={PlayerLoginPage} />
    </Switch>
  </Router>
);
export default router;
