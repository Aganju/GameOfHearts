import { FLIP_MODAL } from '../actions/ui_actions';
import { RECEIVE_CURRENT_USER } from '../actions/user_actions';

const UIReducer = (state = { modalOpen: false}, action) => {
  switch (action.type) {
    case FLIP_MODAL:
      return { modalOpen: !state.modalOpen };
    case RECEIVE_CURRENT_USER:
      return { modalOpen: false};
    default:
      return state;
  }
};

export default UIReducer;
