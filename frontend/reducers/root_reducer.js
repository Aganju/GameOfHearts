import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import ProfileReducer from './profile_reducer';
import QuestionsAndAnswersReducer from './questions_and_answers_reducer';
import SessionReducer from './session_reducer';
import UIReducer from './ui_reducer';
import UsersReducer from './users_reducer';

const rootReducer = combineReducers({
  errors: ErrorsReducer,
  profile: ProfileReducer,
  questions_and_answers: QuestionsAndAnswersReducer,
  session: SessionReducer,
  ui: UIReducer,
  users: UsersReducer,
});

export default rootReducer;
