import * as UsersUtil from '../utils/users_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: user
  };
};

export const receiveUserErrors = (errors) => {
  return {  type: RECEIVE_USER_ERRORS, errors  };
};

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users: users
  };
};

export const createUser = (user) => (dispatch) => {
  return UsersUtil.createUser(user)
    .then( (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (errorRes) => dispatch(receiveUserErrors({server: errorRes.responseJSON}))
  );
};
