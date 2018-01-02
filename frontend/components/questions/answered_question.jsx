import React from 'react';
import OpenQuestion from './open_question';

class AnsweredQuestion extends React.Component{

  constructor (props){
    super(props);

    this.state = { edit: false};
    this.question = this.props.question;
    this.userImage = this.props.userImage;
    this.otherUserImage = this.props.otherUserImage;
    this.userAnswerID = this.props.userQuestionAnswer.answer_id;
    this.otherUserAnswerID = this.props.otherUserAnswerID;

    this.questionChoiceObject = {};
    this.question.answerChoices.forEach((choice) => {
       this.questionChoiceObject[choice.id] = choice;
     });
  }

  render(){
    if(this.state.edit){
      return <OpenQuestion
              question={this.question}
              questionAnswer={this.props.userQuestionAnswer}
              complete={(newAnswerId)=> {
                this.userAnswerID= newAnswerId;
                this.setState({edit: false});
              }}
            />;
    }

    if(this.otherUserImage === this.userImage){
      return(
        <div className='question'>
          <h3>{this.question.question_text}</h3>
          <ul>
            { this.question.answerChoices.map((choice) => {
              return choice.id === this.userAnswerID ?
              <li key={choice.id} className='selected question-answer'>
                <i className="fa fa-check" aria-hidden="true"></i>
                {choice.answer_text}
              </li> :
              <li key={choice.id} className='question-answer'>
                {choice.answer_text}
              </li >;
            }) }
          </ul>
          <div className='edit-button'>
            <button onClick={() => this.setState({edit: true})}>edit</button>
          </div>
        </div>
      );
    }
    else{
      return(
        <div className='question'>
          <h3>{ this.question.question_text }</h3>
          <div className='question-answer'>
            <img src={this.userImage}/>
            <span>{ this.questionChoiceObject[this.userAnswerID].answer_text }</span>
          </div>
          <div className='question-answer'>
            <img src={this.otherUserImage}/>
            <span>{ this.questionChoiceObject[this.otherUserAnswerID].answer_text }</span>
          </div>
          <div className='edit-button'>
            <button onClick={() => this.setState({edit: true})}>edit</button>
          </div>
        </div>
      );
    }

  }
}

export default AnsweredQuestion;
