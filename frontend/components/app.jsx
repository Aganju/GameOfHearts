import React from 'react';
import LandingContainer from './landing/landing_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import { Switch } from 'react-router-dom';
import Header from './header/header';

const App = () => (
  <div>
    <Header />
    <AuthRoute path='/' component={LandingContainer} />
    <Switch>
      <ProtectedRoute path='/' render={() => ''}/>
    </Switch>
  </div>
);

export default App;
