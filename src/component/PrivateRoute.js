/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Add your own authentication on the below line.
  const isLoggedIn = !!localStorage.getItem('adminId');

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/admin', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
