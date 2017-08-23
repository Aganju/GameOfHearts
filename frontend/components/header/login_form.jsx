import React from 'react';

export default class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }


  login(){
    this.props.login(this.state);
  }

  handleChange(field){
    return (e) => this.setState({ [field]: e.target.value });
  }

  render(){
    return(
      <form id='signin-form'>
        Sign in
        <input
          onChange={ this.handleChange('username') }
          placeholder='Your username'
          type='text'
        />
        <input
          onChange={ this.handleChange('password') }
          placeholder='password'
          type='password'
        />
        <button onClick={this.login}>Let's go</button>
      </form>
    );
  }
}
