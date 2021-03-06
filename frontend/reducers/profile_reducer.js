import { UPDATE_PROFILE,
         RECEIVE_CURRENT_USER,
         RECEIVE_CURRENT_PROFILE } from '../actions/user_actions';
import { merge } from 'lodash';

const ProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_PROFILE:
      return action.profile;
    case UPDATE_PROFILE:
      return action.profile;
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default ProfileReducer;
