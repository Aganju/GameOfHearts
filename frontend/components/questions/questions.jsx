import React from 'react';
import { Link } from 'react-router-dom';
import UnansweredQuestions from './unanswered_questions';
import AnsweredQuestion from './answered_question';

export default class Questions extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchUserQuestions(this.props.currentUserId);
    this.props.fetchUserQuestions(this.props.basics.id);
  }

  componentWillReceiveProps(newProps){
    if(this.props.basics.username !== newProps.basics.username){
      this.props.fetchUserQuestions(newProps.basics.id);
    }
    this.owner = (newProps.basics.username === newProps.currentUser);
  }

  render(){
    if(this.props.answers[this.props.basics.id]) return(
      <div id='questions-container'>
        <div id='questions-header'>
          <div className='inner'>
            <Link to={`/profile/${this.props.basics.username}`}>{'<'}</Link>
            <div id='questions-header-img'>
              <img src={this.props.basics.main_img_url}/>
            </div>
            <div id='question-deets' onClick={this.props.openModal}>
              <h2>{ this.props.basics.username }</h2>
            </div>
          </div>
        </div>
        <questions id='questions-body'>
          <h2>Match Questions</h2>
          { this.owner ? <UnansweredQuestions />  : null}
          <div id='questions-list'>
            { Object.keys(this.props.questions).map((questionId) => {
              if(this.props.answers[this.props.currentUserId][questionId])
              return <AnsweredQuestion
                question={this.props.questions[questionId]}
                userImage={this.props.currentUserImg}
                otherUserImage={this.props.basics.main_img_url}
                userQuestionAnswer={this.props
                        .answers[this.props.currentUserId][questionId]}
                otherUserAnswerID={this.props
                            .answers[this.props.basics.id][questionId].answer_id}
                />;
            })}
        </div>
        </questions>
      </div>
    );
    else return null;
  }
}
