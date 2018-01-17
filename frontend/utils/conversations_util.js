export const getConversations = () => {
  return $.ajax({
    url: 'api/conversations',
    method: 'GET'
  });
};

export const createConversation = (convoStarter) => {
  return $.ajax({
    url: 'api/conversations',
    method: 'POST',
    data: {conversation: convoStarter}
  });
};

export const updateConversation = (id, message) => {
  return $.ajax({
    url: `api/conversations/${id}`,
    method: 'PATCH',
    data: {conversation: { message } }
  });
};

export const showConversation = (id) => {
  return $.ajax({
    url: `api/conversations/${id}`,
    method: 'GET',
  });
};
