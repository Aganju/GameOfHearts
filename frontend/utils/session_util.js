export const loginUser = (user) => {
  return $.ajax({
  	url: '/api/session',
	  method: 'POST',
	  data: { user: user }
  });
};

export const logoutUser = (user) => {
  return $.ajax({
  	url: '/api/session',
	  method: 'DELETE',
  });
};
