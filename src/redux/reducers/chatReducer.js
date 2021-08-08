import {OPEN_CHAT} from './types';

const initialState = {
  openChat: -1
}

const chats = {
  data: [
    {
      id: 1,
      messages: [
        {
          id: 123,
          chatId: 1,
          date: 1628450946317,
          senderId: 1,
          content: {
            text: "this is an intelligent message"
          },
        },
        {
          id: 423,
          chatId: 1,
          date: 1628450946317,
          senderId: 0,
          content: {
            text: "this is an intelligent reply"
          },
        }
      ]
    },
    {
      id: 2,
      messages: [
        {
          id: 1234312,
          chatId: 2,
          date: 1628450946317,
          senderId: 2,
          content: {
            text: "this is an intelligent message"
          },
        },
        {
          id: 4232413,
          chatId: 2,
          date: 1628450946317,
          senderId: 0,
          content: {
            text: "this is an intelligent reply"
          },
        },
        {
          id: 4232413321,
          chatId: 2,
          date: 1628450946317,
          senderId: 2,
          content: {
            text: "wow damn it's good"
          },
        }
      ]
    }
  ]
}

export function openChatReducer(state = initialState, action) {
  console.log(state)
  switch (action.type) {
    case OPEN_CHAT:
      return {...state, openChat: parseInt(action.payload)}
    default:
      return initialState
  }
}

export function chatMessagesReducer(state = chats, action) {
  return state
}

export default { chatMessagesReducer, openChatReducer }
