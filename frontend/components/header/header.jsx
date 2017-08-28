import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser, logoutUser } from '../../actions/session_actions';
import Modal from 'react-modal';
import LoginForm from './login_form';

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(loginUser(user)),
    logout: () => dispatch(logoutUser())
  };
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.session
  };
};

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = { modalOpen: false };

    this.flipModal = this.flipModal.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  flipModal(){
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  guestLogin(){
    this.props.login({username: 'Cupid', password: 'password'});
  }

  render(){
    if(this.props.currentUser.username){
      return(
        <div id='header'>
          <h2>Game Of Hearts </h2>
          <h2>{this.props.currentUser.username}</h2>
          <Link to='/profile'>Profile</Link>
          <button onClick={ this.props.logout }>Sign out</button>
        </div>
      );
    }
    else{
      return(
        <div id='login-header'>
            <h2>Game Of Hearts </h2>
            <div id='signIn'>
              Have an account?
              <button onClick={ this.flipModal }>Sign in</button>
              <button onClick={ this.guestLogin }>Guest login</button>
            </div>
            <Modal
              onClick={ this.flipModal }
              isOpen={this.state.modalOpen}
              onRequestClose={this.flipModal}
              contentLabel='loginModal'
              className={{
                base: 'content',
                afterOpen: 'content',
                beforeClose: 'content'
              }}
              overlayClassName={{
                base: 'overlay',
                afterOpen: 'overlay',
                beforeClose: 'overlay',
              }}
            >
              <LoginForm login={ this.props.login }/>
            </Modal>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
