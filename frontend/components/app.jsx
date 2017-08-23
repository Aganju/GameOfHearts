import React from 'react';
import LandingContainer from './landing/landing_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

const App = () => (
  <div>
    <AuthRoute path='/' component={LandingContainer} />
  </div>
);

export default App;
