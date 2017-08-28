import React from 'react';

export default class Profile extends React.Component{
  constructor(props){
    super(props);
    this.basics = this.props.profile.basics;
    this.details = this.props.profile.details;
    this.about = this.props.profile.about;
  }


  componentDidMount(){
    this.props.fetchProfile(this.props.username);
  }

  aboutRenderer(title, content){
    return (
      <div className='about-div'></div>
    );
  }

  render(){
    if (this.basics){
      return (
        <div id='prof-container'>
          <div id='prof-header'>
            <div id='prof-img'>
              <img src={this.details.main_img_url}/>
            </div>
            <div id='deets'>
              <span>{ this.basics.username }</span>
              <span>{ this.basics.age }</span>
              <span>{ this.basics.address }</span>
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
