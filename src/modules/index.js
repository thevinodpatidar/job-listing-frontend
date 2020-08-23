import React from 'react';
import  AdminModule  from './Admin/index';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { Signup, Login, ForgotPassword } from './Auth';
import Jobs from './User/Jobs';

const Module = () => {
  const match = useRouteMatch();
  return (
      <Switch>
        <Route exact path={`${match.path}`} component={Jobs} />
        <Route exact path={`${match.path}login`} component={Login} />
        <Route exact path={`${match.path}signup`} component={Signup} />
        <Route exact path={`${match.path}forgotPassword`} component={ForgotPassword} />
      </Switch>
  )
};

export default Module;
