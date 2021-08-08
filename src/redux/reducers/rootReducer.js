import { combineReducers } from 'redux'
import chatListReducer from './chatListReducer';
import {chatMessagesReducer, openChatReducer} from './chatReducer.js';

export const rootReducer = combineReducers({
  dialogs: chatListReducer,
  messages: chatMessagesReducer,
  openChat: openChatReducer
})
