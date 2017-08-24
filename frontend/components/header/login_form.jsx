import React from 'react';

export default class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', invalid: false};
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }


  login(){
    this.props.login(this.state).then(null,
      () => this.setState({invalid: true}));
  }

  handleChange(field){
    return (e) => this.setState({ [field]: e.target.value, invalid: false });
  }

  render(){
    const error = this.state.invalid ?
    <span className='errors'>Username or password is incorrect</span> :
      '';

    return(
      <form id='signin-form'>
        <h2>Sign in</h2>
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
        { error }
        <button onClick={this.login}>Let's go</button>
      </form>
    );
  }
}
