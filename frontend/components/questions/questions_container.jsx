import { connect } from 'react-redux';
import * as QActs from '../../actions/question_actions';
import Questions from './questions';

const mapStateToProps = (state) => {
  return {
    questions: state.questions_and_answers.questions,
    answers: state.questions_and_answers.answers,
    unAnsweredQuestions: state.questions_and_answers.unAnsweredQuestions,
    currentUser: state.session.username,
    currentUserImg: state.session.main_img_url,
    currentUserId: state.session.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUnansweredQuestions: () => dispatch(QActs.fetchUnansweredQuestions()),
    fetchUserQuestions: (userId) => dispatch(QActs.fetchUserQuestions(userId)),
    answerQuestion: (answerId) => dispatch(QActs.answerQuestion(answerId)),
    reAnswerQuestion: (questionAnswerId, newAnswerId) =>
            dispatch(QActs.updateQuestionAnswer(questionAnswerId, newAnswerId)),
    unAnswerQuestion: (questionAnswerId) =>
            dispatch(QActs.removeQuestionAnswer(questionAnswerId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
