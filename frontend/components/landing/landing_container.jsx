import { connect } from 'react-redux';
import { createUser } from '../../actions/user_actions';
import { receiveUserErrors } from '../../actions/user_actions';
import Landing from './landing';

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(createUser(user)),
    addError: (error) => dispatch(receiveUserErrors(error))
  };
};

const mapStateToProps = (state) => {
  return {
    userCreationErrors: state.errors.userCreation
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
