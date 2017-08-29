import React from 'react';
import { Switch } from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import LandingContainer from './landing/landing_container';
import ProfileContainer from './profile/profile_container';

const App = () => (
  <div id='app'>
    <Header />
      <div id='main-content'>
        <AuthRoute path='/' component={LandingContainer} />
        <Switch>
          <ProtectedRoute path='/profile/:username' component={ProfileContainer} />
          <ProtectedRoute path='/profile' component={ ProfileContainer } />
          <ProtectedRoute path='/' render={() => ''}/>
        </Switch>
      </div>
    <Footer />
  </div>
);

export default App;
