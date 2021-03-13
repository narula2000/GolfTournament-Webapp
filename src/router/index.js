import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminCreatePage from '../pages/AdminCreatePage';
import AdminLoginPage from '../pages/AdminLoginPage';
import RankingHomePage from '../pages/RankingHomePage';
import AdminDashboard from '../pages/AdminDashboard';

const router = () => (
  <Router>
    <Switch>
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin" component={AdminLoginPage} />
      <Route path="/" component={RankingHomePage} />
      <Route path="admin/create" component={AdminCreatePage} />
    </Switch>
  </Router>
);
export default router;
