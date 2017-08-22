import * as SessionUtil from '../utils/session_util';
import { receiveCurrentUser } from './user_actions';

export const loginUser = (user) => (dispatch) => {
  return SessionUtil.loginUser(user)
    .then( (currentUser) => dispatch(receiveCurrentUser(currentUser))
  );
};
export const logoutUser = (user) => (dispatch) => {
  return SessionUtil.logoutUser(user)
    .then( (currentUser) => dispatch(receiveCurrentUser(currentUser))
  );
};
