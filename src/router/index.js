import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import PrivateRoute from '../component/PrivateRoute';
import AdminCreatePage from '../pages/AdminCreatePage';
import Login from '../pages/Login';
import HomePage from '../pages/HomePage';
import AdminDashboard from '../pages/AdminDashboard';
import firebaseConfig from '../firebase';
import 'firebase/auth';
import ViewTournamentUser from '../pages/ViewTournamentUser';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) localStorage.setItem('adminId', user.uid);
});

const router = () => (
  <Router>
    <Switch>
      <PrivateRoute path="/admin/dashboard" component={AdminDashboard} />
      <PrivateRoute path="/admin/create" component={AdminCreatePage} />
      <Route path="/admin/tournamentuser" component={ViewTournamentUser} />
      <Route path="/admin" component={Login} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>
);
export default router;
