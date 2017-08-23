import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';
import Modal from 'react-modal';
import LoginForm from './login_form';

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(loginUser(user))
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
  }

  flipModal(){
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render(){
    if(this.props.currentUser.username){
      return null;
    }
    else{
      return(
        <div id='header'>
            <h2>Game Of Hearts </h2>
            <div id='signIn'>
              Have an account?
              <button onClick={ this.flipModal }>Sign in</button>
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

const customStyes = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.5)'
  },
  content : {
    position                   : 'absolute',
    top                        : '45px',
    left                       : '300px',
    right                      : '300px',
    bottom                     : '400px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
