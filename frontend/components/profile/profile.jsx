import React from 'react';
import { Link } from 'react-router-dom';
import About from './about';
import Detail from './detail';
import ModalContainer from '../modal/modal_container';
import QuestionsContainer from '../questions/questions_container';
import UnansweredQuestions from '../questions/unanswered_questions';
import ProfileDetailForm from './profile_detail_form';

export default class Profile extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchProfile(this.props.username);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.username !== nextProps.username)
      this.props.fetchProfile(nextProps.username);
  }

  render(){
    if (this.props.profile.basics){

      this.basics = this.props.profile.basics;
      this.details = this.props.profile.details;
      if(this.props.location.pathname === this.props.match.url + '/questions'){
        return <QuestionsContainer basics={this.basics} />;
      }
      else{
        return (
          <div>
            <div id='prof-container'>
              <div id='prof-header'>
                <div className='inner'>
                  <div id='prof-img'>
                    <img src={this.basics.main_img_url}/>
                  </div>
                  <div id='deets' onClick={this.props.openModal}>
                    <h2>{ this.basics.username }</h2>
                    <span>{ this.basics.age }</span>
                    <span>•</span>
                    <span>{ this.basics.address }</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='main'>
              <div className='inner'>
                <About
                  about={this.props.profile.about}
                  updateProfile={this.props.updateProfile}
                  owner = {this.props.currentUser === this.props.username}
                  />
                <Detail
                  openModal={this.props.openModal}
                  details={this.props.profile.details}
                  updateProfile={this.props.updateProfile}
                  owner = {this.props.currentUser === this.props.username}
                  />
              </div>
              <div id='question-splash'>
                <Link to={`/profile/${this.basics.username}/questions`}>
                  <span>
                    {(this.props.currentUser === this.props.username) ?
                    'Questions' : 'Match Questions'}
                  </span>
                </Link>
              </div>
            </div>

            <ModalContainer modalClassName={'profile-form-content'}>
              <ProfileDetailForm
                updateProfile={this.props.updateProfile}
                updateProfileImage={this.props.updateProfileImage}
                profile={this.props.profile}
                closeModal={this.props.openModal}
                />
            </ModalContainer>

          </div>
        );
      }
    }
    else {
      return null;
    }
  }
}
