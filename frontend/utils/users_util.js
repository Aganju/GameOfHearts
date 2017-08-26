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
      url: '/api/users/',
      method: 'GET',
      data: { user: profile },
  });
};
