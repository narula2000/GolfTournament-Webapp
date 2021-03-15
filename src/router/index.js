import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AdminLoginPage from '../pages/AdminLoginPage';
import RankingHomePage from '../pages/RankingHomePage';
import AdminDashboard from '../pages/AdminDashboard';
import ViewTournamentUser from '../pages/ViewTournamentUser';

const router = () => (
  <Router>
    <Switch>
      <Route path="/admin/tournamentuser" component={ViewTournamentUser} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin" component={AdminLoginPage} />
      <Route path="/" component={RankingHomePage} />
    </Switch>
  </Router>
);
export default router;
