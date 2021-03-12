import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import RankingHome from '../pages/RankingHome';
import AdminDashboard from '../pages/AdminDashboard';
import ViewTournamentUser from '../pages/ViewTournamentUser';

const router = () => (
  <Router>
    <Switch>
      <Route path="/admin/tournamentuser" component={ViewTournamentUser} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin" component={Login} />
      <Route path="/" component={RankingHome} />
    </Switch>
  </Router>
);
export default router;
