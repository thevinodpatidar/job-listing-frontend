import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Signup, Login, ForgotPassword } from './Auth';
import Jobs from './User/Jobs';
import Job from './User/components/Job';

const Module = () => {
  const match = useRouteMatch();
  return (
      <Switch>
        <Route exact path={`${match.path}`} component={Jobs} />
        <Route exact path={`${match.path}login`} component={Login} />
        <Route exact path={`${match.path}signup`} component={Signup} />
        <Route exact path={`${match.path}forgotPassword`} component={ForgotPassword} />
        <Route exact path={`${match.path}jobs/:id`} component={Job} />
      </Switch>
  )
};

export default Module;
