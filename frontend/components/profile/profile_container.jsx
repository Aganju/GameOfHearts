import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchProfile, updateProfile } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  const username = ownProps.match.params.username || state.session.username;
  return {
    profile: state.profile,
    currentUser: state.session.username,
    username: username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (updates) => dispatch(updateProfile(updates)),
    fetchProfile: (username) => dispatch(fetchProfile(username)),
  };
};

export default connect(mapStateToProps,
                                  mapDispatchToProps)(Profile);
