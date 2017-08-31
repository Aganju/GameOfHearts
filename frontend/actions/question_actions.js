import * as QuestionsUtil from '../utils/questions_util';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_QUESTION_ANSWERS = 'RECEIVE_QUESTION_ANSWERS';
export const REMOVE_QUESTION_ANSWER = 'REMOVE_QUESTION_ANSWER';

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions: questions
  };
};

export const receiveQuestionAnswers = (answers, userId) => {
  return {
    type: RECEIVE_QUESTION_ANSWERS,
    userId: userId,
    answers: answers
  };
};

export const removeQuestionAnswer = (answer) => {
  return {
    type: REMOVE_QUESTION_ANSWER,
    deletedAnswer: answer,
  };
};

export const fetchUnansweredQuestions = () => (dispatch) => {
  return QuestionsUtil.getUnansweredQuestions()
    .then( (res) => dispatch(receiveQuestions(res.questions)));
};

export const answerQuestion = (answerId) => (dispatch, getState) => {
  return QuestionsUtil.createAnswer(answerId)
    .then( (res) => dispatch(receiveQuestionAnswers(res.answers,
                                                      getState().session.id)));
};

export const updateQuestionAnswer = (questionAnswerId, newAnswerId) =>
                                    (dispatch, getState) => {
  return QuestionsUtil.updateAnswer(questionAnswerId, newAnswerId)
    .then( (res) => dispatch(receiveQuestionAnswers(res.answers,
                                                      getState().session.id)));
};

export const fetchUserQuestions = (userId) => (dispatch) => {
  return QuestionsUtil.getUserQuestions(userId)
    .then( (questionsAndAnswers) => {
      dispatch(receiveQuestions(questionsAndAnswers.questions));
      dispatch(receiveQuestionAnswers(questionsAndAnswers.answers, userId));
    });
};

export const deleteQuestionAnswer = (answerId) => (dispatch, getState) => {
  return QuestionsUtil.deleteAnswer(answerId)
    .then( (res) => dispatch(removeQuestionAnswer(res.answers[0])));
};
