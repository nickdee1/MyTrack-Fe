
const initialState = {
  data: [
    {
      id: 1,
      username: 'pavel_paklonski',
      title: 'PAVLUSHA',
      lastMessage: {
        chatId: 1,
        id: 2,
        content: {
          text: "text message template"
        },
        date: 1628450946317,
      },
      unreadCount: 1
    },
    {
      id: 2,
      username: 'eduard_nur',
      title: 'Edik Legko',
      lastMessage: {
        chatId: 2,
        id: 3,
        content: {
          text: "DJ po2h"
        },
        date: 1628450946317,
      },
      unreadCount: 2
    }
  ]
}

export default function chatListReducer(state = initialState, action) {
  return initialState
}
