import { combineReducers } from 'redux';
import ConversationsReducer from './conversations_reducer';
import ErrorsReducer from './errors_reducer';
import ProfileReducer from './profile_reducer';
import QuestionsAndAnswersReducer from './questions_and_answers_reducer';
import SessionReducer from './session_reducer';
import UIReducer from './ui_reducer';
import UsersReducer from './users_reducer';
import { LOGOUT_USER } from '../actions/session_actions';

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_USER){
      state = undefined;
    }

    return appReducer(state, action);

};

const appReducer = combineReducers({
  conversations: ConversationsReducer,
  errors: ErrorsReducer,
  profile: ProfileReducer,
  questions_and_answers: QuestionsAndAnswersReducer,
  session: SessionReducer,
  ui: UIReducer,
  users: UsersReducer,
});

export default rootReducer;
