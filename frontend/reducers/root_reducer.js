import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import ProfileReducer from './profile_reducer';
import UIReducer from './ui_reducer';
import QuestionsAndAnswersReducer from './questions_and_answers_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  profile: ProfileReducer,
  ui: UIReducer,
  questions_and_answers: QuestionsAndAnswersReducer,
});

export default rootReducer;
