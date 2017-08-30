export const createUser = (user) => {
  return $.ajax({
  	url: '/api/users',
	  method: 'POST',
	  data: { user: user }
  });
};

export const getProfile = (username) => {
  return $.ajax({
      url: `/api/users/${username}`,
      method: 'GET',
  });
};

export const updateProfile = (profile) => {
  return $.ajax({
      url: '/api/users/update',
      method: 'PATCH',
      data: { user: profile },
  });
};

export const updateProfileImage = (profileImage) => {
  return $.ajax({
      url: '/api/users/update',
      method: 'PATCH',
      processData: false,
      contentType: false,
      data: profileImage,
  });
};
