import React from 'react';
import LandingContainer from './landing/landing_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import Header from './header/header';

const App = () => (
  <div>
    <div id='header' />
    <Header />
    <AuthRoute path='/' component={LandingContainer} />
  </div>
);

export default App;
