import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export const authRoute = ({ path, component, session}) => {
  if (session.username) {
    return <Redirect to='/browse' />;
  }
  else{
    return <Route path={path} component={component} />;
  }
};

export const protectedRoute = ({ path, component, session}) => {
  if (session.username) {
    return <Route path={path} component={component} />;
  }
  else{
    return <Redirect to='/' />;
  }
};

const mapStateToProps = (state) => {
  return { session: state.session };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(authRoute));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(protectedRoute));
