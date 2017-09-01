import * as UsersUtil from '../utils/users_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_CURRENT_PROFILE = 'RECEIVE_CURRENT_PROFILE';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: user
  };
};

export const receiveCurrentProfile = (profile) => {
  return {
    type: RECEIVE_CURRENT_PROFILE,
    profile: profile
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

export const fetchUsers = (prefs) => (dispatch) => {
  return UsersUtil.getUsers(prefs)
    .then( (users) => dispatch(receiveUsers(users)),
    (errorRes) => dispatch(receiveUserErrors({server: errorRes.responseJSON}))
  );
};

export const createUser = (user) => (dispatch) => {
  return UsersUtil.createUser(user)
    .then( (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (errorRes) => dispatch(receiveUserErrors({server: errorRes.responseJSON}))
  );
};

export const fetchProfile = (username) => (dispatch) => {
  return UsersUtil.getProfile(username)
    .then( (currentProfile) => dispatch(receiveCurrentProfile (currentProfile)),
    (errorRes) => dispatch(receiveUserErrors({server: errorRes.responseJSON}))
  );
};

export const updateProfile = (profile) => (dispatch) => {
  return UsersUtil.updateProfile(profile)
    .then( (updatedProfile) => dispatch(receiveCurrentProfile (updatedProfile)),
    (errorRes) => dispatch(receiveUserErrors({server: errorRes.responseJSON}))
  );
};

export const updateProfileImage = (profileImage) => (dispatch) => {
  return UsersUtil.updateProfileImage(profileImage)
    .then( (updatedProfile) => dispatch(receiveCurrentProfile (updatedProfile)),
    (errorRes) => dispatch(receiveUserErrors({server: errorRes.responseJSON}))
  );
};
