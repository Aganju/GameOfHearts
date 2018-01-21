import * as ConversationsUtil from '../utils/conversations_util';

export const RECEIVE_CONVERSATIONS = 'RECEIVE_CONVERSATIONS';
export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION';
export const RECEIVE_NEW_CONVERSATION = 'RECEIVE_NEW_CONVERSATION';

export const receiveConversations = (conversations) => ({
  type: RECEIVE_CONVERSATIONS,
  conversations
});

export const receiveConversation = (conversation) => ({
  type: RECEIVE_CONVERSATION,
  conversation
  });

export const receiveNewConversation = (conversation) => ({
  type: RECEIVE_NEW_CONVERSATION,
  conversation
});

export const fetchConversations = () => (dispatch => {
  return ConversationsUtil.getConversations()
    .then((conversations) => dispatch(receiveConversations(conversations)));
});

export const fetchConversation = (id) => (dispatch => {
  return ConversationsUtil.showConversation(id)
    .then((conversation) => dispatch(receiveConversation(conversation)));
});
export const createConversation = (convoStarter) => (dispatch => {
  return ConversationsUtil.createConversation(convoStarter)
    .then((conversation) => dispatch(receiveNewConversation(conversation)));
});
export const updateConversation = (id, message) => (dispatch => {
  return ConversationsUtil.updateConversation(id, message)
    .then((conversation) => dispatch(receiveConversation(conversation)));
});
