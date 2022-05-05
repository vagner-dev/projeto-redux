import React from 'react';
import Login from '../pages/Login';
import Dragons from '../pages/Dragons/';
import PrivateRoute from './Private';
import { Routes as Switch, Route } from 'react-router-dom';
const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          <PrivateRoute redirectTo="/">
            <Dragons />
          </PrivateRoute>
        }
      />
    </Switch>
  );
};

export default Routes;
