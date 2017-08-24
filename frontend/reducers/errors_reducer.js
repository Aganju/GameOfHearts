import { RECEIVE_USER_ERRORS } from '../actions/user_actions';
import { RECEIVE_LOGIN_ERRORS } from '../actions/session_actions';

import { merge } from 'lodash';

const defaultErrors ={
  loginErrors: [],
  userCreation: {},
};

const ErrorsReducer = (state = defaultErrors , action) => {
  switch (action.type) {
    case RECEIVE_LOGIN_ERRORS:
      return merge({}, state, { loginErrors: action.errors });
    case RECEIVE_USER_ERRORS:
      return merge({}, state, { userCreation: action.errors });
    default:
      return state;
  }
};

export default ErrorsReducer;
