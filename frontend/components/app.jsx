import { Route } from 'react';

const App = () => (
  <div>
    <Header />
    <AuthRoute path='/' component={LandingContainer} />
  </div>
);
