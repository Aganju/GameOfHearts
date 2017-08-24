import * as SessionUtil from '../utils/session_util';
import { receiveCurrentUser } from './user_actions';

export const RECEIVE_LOGIN_ERRORS = 'RECEIVE_LOGIN_ERRORS';

export const receiveLoginErrors = (errors) => {
  return {  type: RECEIVE_LOGIN_ERRORS, errors  };
};

export const loginUser = (user) => (dispatch) => {
  return SessionUtil.loginUser(user)
    .then( (currentUser) => dispatch(receiveCurrentUser(currentUser),
    (errorRes) => dispatch(receiveLoginErrors(errorRes.responseJSON)))
  );
};
export const logoutUser = (user) => (dispatch) => {
  return SessionUtil.logoutUser(user)
    .then( (currentUser) => dispatch(receiveCurrentUser(currentUser))
  );
};
