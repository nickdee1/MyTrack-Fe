import {OPEN_CHAT, CLOSE_CHAT} from './reducers/types';

export function openChat(chat) {
  return {
    type: OPEN_CHAT,
    payload: chat
  }
}

export function closeChat() {
  return {
    type: CLOSE_CHAT
  }
}
