import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as UserActions from './actions/user_actions';
import * as SessionActions from './actions/session_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    let store;
  if(window.currentUser) {
    store= configureStore({session: window.currentUser});
  }
  else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.UserActions = UserActions;
  window.SessionActions = SessionActions;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
