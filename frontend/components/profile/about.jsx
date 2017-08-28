import React from 'react';

export default class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      faves: { status: false, text: ''},
      first_thing: { status: false, text: ''},
      friday_night: { status: false, text: ''},
      good_at: { status: false, text: ''},
      msg_me_if: { status: false, text: ''},
      my_life: { status: false, text: ''},
      private: { status: false, text: ''},
      six_things: { status: false, text: ''},
      summary: { status: false, text: ''},
      thoughts: { status: false, text: ''},
    };

    this.about = this.props.about;
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  toggleEdit(e, section, status){
    e.preventDefault();
    this.setState({ [section]: { status, text: this.about[section] } });
  }

  updateProfile(e, contentName){
    e.preventDefault();
    this.props.updateProfile({
       [contentName]: this.state[contentName].text
     }).then(() => {
       this.setState({ [contentName]: { status: false, text: '' } });
     });
  }

  inputChange(contentName){
    return (e) => {
      this.setState({[contentName]: {
        status: true,
        text: e.currentTarget.value,
      }});
    };
  }

  aboutRenderer(title, contentName){
    if(this.state[contentName].status){
      return(
        <div className='about-div'>
          <h3>{title}</h3>
          <form onSubmit={(e) => this.updateProfile(e, contentName)}>
            <textarea
              onChange={ this.inputChange(contentName) }
              defaultValue={ this.state[contentName].text }
            >
            </textarea>
            <button>Save</button>
            <button onClick={(e) => this.toggleEdit(e, contentName, false)}>
              Cancel
             </button>
          </form>
        </div>

      );
    }
    else{
      return (
        <div className='about-div'>
          <h3>{title}</h3>
          {this.props.owner ?
          <button onClick={ (e) => this.toggleEdit(e, contentName, true)}>
            Edit
          </button> :
            null }
          <p>{this.about[contentName]}</p>
        </div>
      );
    }
  }

  render(){
    return(
      <div id='about'>
        {this.aboutRenderer('My self-summary', 'summary')}
        {this.aboutRenderer('What I’m doing with my life',
          'my_life')}
        {this.aboutRenderer('I\'m really good at', 'good_at')}
        {this.aboutRenderer('The first things people usually notice about me',
          'first_thing')}
        {this.aboutRenderer('Favorite books, movies, shows, music, and food',
          'faves')}
        {this.aboutRenderer('Six things i could never do without',
          'six_things')}
        {this.aboutRenderer('I spend a lot of time thinking about',
          'thoughts')}
        {this.aboutRenderer('On a typical Friday night i am',
          'friday_night')}
        {this.aboutRenderer('The most private thing i\'m willing to admit',
          'private')}
        {this.aboutRenderer('You should messsage me if',
          'msg_me_if')}
      </div>
    );
  }
}
