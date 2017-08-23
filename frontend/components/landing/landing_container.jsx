import { connect } from 'react-redux';
import { createUser } from '../../actions/user_actions';
import Landing from './landing';

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(createUser(user))
  };
};

export default connect(null, mapDispatchToProps)(Landing);
