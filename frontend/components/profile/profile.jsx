import React from 'react';
import About from './about';
import Detail from './detail';

export default class Profile extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchProfile(this.props.username);
  }

  render(){
    if (this.props.profile.basics){

      this.basics = this.props.profile.basics;
      this.details = this.props.profile.details;
      return (
        <div>
          <div id='prof-container'>
            <div id='prof-header'>
              <div className='inner'>
                <div id='prof-img'>
                  <img src={this.details.main_img_url}/>
                </div>
                <div id='deets'>
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
                details={this.props.profile.details}
                updateProfile={this.props.updateProfile}
                owner = {this.props.currentUser === this.props.username}
              />
            </div>
          </div>
        </div>
      );
    }
    else {
      return null;
    }
  }
}
