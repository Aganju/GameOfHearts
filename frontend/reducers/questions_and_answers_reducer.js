import { RECEIVE_QUESTIONS, RECEIVE_QUESTION_ANSWERS,
         REMOVE_QUESTION_ANSWER,
         RECEIVE_UNANSWERED_QUESTIONS } from '../actions/question_actions';
import { merge } from 'lodash';

const defaultState = {questions: {}, answers: {}, unAnsweredQuestions: {} };

const QuestionsAndAnswersReducer = (state = defaultState, action ) => {
  let newState;
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      newState = merge({ }, state);
      newState.questions = {};
      action.questions.forEach((question) => {
        newState.questions[question.id] = question;
      });
      return newState;
    case RECEIVE_UNANSWERED_QUESTIONS:
      newState = merge({ }, state);
      newState.unAnsweredQuestions = {};
      action.questions.forEach((question) => {
        newState.unAnsweredQuestions[question.id] = question;
      });
      return newState;
    case RECEIVE_QUESTION_ANSWERS:
      newState = merge({}, state);
      newState.answers[action.userId] = newState.answers[action.userId] || {};
      action.answers.forEach((answer) => {
        newState.answers[action.userId][answer.question_id] = answer;
      });
      return newState;
    case REMOVE_QUESTION_ANSWER:
      newState = merge({}, state);
      delete newState.answers[action.deletedAnswer.user_id][action.deletedAnswer.question_id];
      return newState;
    default:
      return state;
  }
};

export default QuestionsAndAnswersReducer;
