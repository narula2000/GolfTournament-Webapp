import React from 'react';
import firebase from 'firebase/app';
import admin from 'firebase-admin';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/styles/index.css';
import firebaseConfig from './firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
