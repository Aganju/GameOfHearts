import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

class Browse extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchUsers();
  }

  render(){
    if(this.props.users){
      return (
        <div id='users-display'>
          {this.props.users.map((user, idx) => {
            return (
              <div
                key={idx}
                className='user-card'
                onClick={()=> this.props.history.push(`/profile/${user.username}`)}>
                <img src={user.main_img_url}/>
                <div className='info-card'>
                  <h2>{user.username}</h2>
                  <div>
                    <span>{user.age}</span>
                    <span>•</span>
                    <span>{user.address}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }else{
      return null;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
