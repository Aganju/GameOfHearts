import { RECEIVE_CONVERSATIONS, RECEIVE_NEW_CONVERSATION,
         RECEIVE_CONVERSATION } from '../actions/conversation_actions';
import { merge } from 'lodash';

const defaultState = {conversationList: [], conversations: {}};

const ConversationsReducer = (state = defaultState, action) =>{
  let newState;
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      newState = merge({ }, state, { conversationList: action.conversations });

      return newState;

    case RECEIVE_CONVERSATION:
      newState = merge({}, state);
      newState.conversations[action.conversation.convo_id] = action.conversation;
      return newState;

    case RECEIVE_NEW_CONVERSATION:
      newState = merge({}, { conversations: state.conversations });

      newState.conversations[action.conversation.convo_id] = action.conversation;

      //put new message in the conversation list slice of state properly formatted
      let newConvo = merge({}, action.conversation);
      newConvo.last_message = newConvo.messages[0];
      delete newConvo.messages;
      newState.conversationList = [newConvo].concat(state.conversationList);

      return newState;

    default:
      return state;
  }
};

export default ConversationsReducer;
