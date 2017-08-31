export const getUnansweredQuestions = () => {
  return $.ajax({
  	url: '/api/questions',
	  method: 'GET',
  });
};

export const createAnswer = (answerId) => {
  return $.ajax({
  	url: '/api/questions',
	  method: 'POST',
	  data: { question: { answer_id: answerId } }
  });
};

export const getUserQuestions = (userId) => {
  return $.ajax({
      url: `/api/questions/${userId}`,
      method: 'GET',
  });
};

export const updateAnswer = (questionAnswerId, newAnswerId) => {
  return $.ajax({
      url: `/api/questions/${questionAnswerId}`,
      method: 'PATCH',
      data: { question: { answer_id: newAnswerId } },
  });
};

export const deleteAnswer = (answerId) => {
  return $.ajax({
      url: `/api/questions/${answerId}`,
      method: 'DELETE',
  });
};
