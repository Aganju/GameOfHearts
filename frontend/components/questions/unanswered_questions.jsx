import React from 'react';
import { connect } from 'react-redux';
import { fetchUnansweredQuestions } from '../../actions/question_actions';
import OpenQuestion from './open_question';

const mapStateToProps = (state) => {
  return {
    unAnsweredQuestions: state.questions_and_answers.unAnsweredQuestions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUnansweredQuestions: () =>  dispatch(fetchUnansweredQuestions())
  };
};

class UnansweredQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0
    };

    this.questionsList = [];
    this.questionAnswered = this.questionAnswered.bind(this);
  }

  componentDidMount(){
    this.props.getUnansweredQuestions();
  }

  questionAnswered(){
    if(this.state.questionIndex + 1 === this.questionsList.length){
      this.props.getUnansweredQuestions();
    }
    else{
      this.setState({questionIndex: this.state.questionIndex + 1});
    }
  }

  componentWillReceiveProps(newProps){
    this.questionsList = Object.keys(newProps.unAnsweredQuestions).map(
      (questionId) => newProps.unAnsweredQuestions[questionId]
    );
    this.setState({questionIndex: 0});
  }

  render(){
    if(this.state.questionIndex < this.questionsList.length) {
      return(
        <OpenQuestion
          question={this.questionsList[this.state.questionIndex]}
          complete={this.questionAnswered}
        />
      );
    }
    else{
      return <div>You've answered all questions</div>;
    }
  }
}

export default connect(mapStateToProps,
                       mapDispatchToProps)(UnansweredQuestions);
