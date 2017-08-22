import { RECEIVE_USERS,
         RECEIVE_CURRENT_USER } from '../actions/user_actions';

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user;
    default:
      return state;
  }
};

export default SessionReducer;
