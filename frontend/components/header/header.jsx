import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ModalContainer from '../modal/modal_container';
import { loginUser, logoutUser } from '../../actions/session_actions';
import LoginForm from './login_form';
import { flipModal } from '../../actions/ui_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(loginUser(user)),
    logout: () => dispatch(logoutUser()),
    openModal: () => dispatch(flipModal()),
  };
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.session,
  };
};

class Header extends React.Component{
  constructor(props){
    super(props);

    this.guestLogin = this.guestLogin.bind(this);
  }

  guestLogin(){
    this.props.login({username: 'Cupid', password: 'password'});
  }

  render(){
    if(this.props.currentUser.username){
      return(
        <div id='header'>
          <div className='header-div'>
            <Link to='/'>
              <h1>GoH</h1>
            </Link>
            <Link to='/browse'>
              <span>Browse Matches</span>
            </Link>
          </div>
          <div className='header-div'>
            <Link to='/messages'>
              <i className="fa fa-comment" aria-hidden="true"></i>
            </Link>
            <Link to='/profile'>
              <div>
                Profile
              </div>
            </Link>
            <button onClick={ this.props.logout }>Sign out</button>
          </div>
        </div>
      );
    }
    else{
      return(
        <div id='login-header'>
            <Link to='/browse'>
               <h1>GoH</h1>
             </Link>
            <div id='signIn'>
              Have an account?
              <button onClick={ this.props.openModal }>Sign in</button>
              <button onClick={ this.guestLogin }>Guest login</button>
            </div>
            <ModalContainer modalClassName='content'>
              <LoginForm login={ this.props.login }/>
            </ModalContainer>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
