import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core';
import ChatMessageCard from '../message-card/MessageCard';
import TextInput from '../chat-text-input/TextInput';
import List from '@material-ui/core/List';
import ChatAppBar from '../app-bar/ChatAppBar';
import {useSelector} from 'react-redux';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
  },
  paper: {
    position: 'relative',
    height: '100%',
  },
  list: {
    height: '100%',
  },
  input: {
    bottom: '0',
    left: '0',
    right: '0',
    width: '100%',
    position: 'absolute'
  },
  chatListAndInput: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }
})

const getMessages = (openChat, chats) => {
  if (openChat !== -1) {
    const chat = chats.find(chat => chat.id === openChat)
    return chat.messages.map(msg =>
      <ChatMessageCard username={'eduard'} msg={msg.content.text}/>
    )
  }
}

const ChatComponent = ({small}) => {
  const classes = useStyles()
  const chats = useSelector(state => state.messages.data)
  const openChat = useSelector(state => state.openChat.openChat)

  return (
      <div
        className={classes.container}
      >
        <Paper className={classes.paper}>
          <ChatAppBar small={small} title={'Personal chat'} lastSeen={'17:00'}/>

          <div className={classes.chatListAndInput}>
            <List
              className={classes.list}
              style={{maxHeight: '80vh', overflow: 'auto'}}
            >
              {getMessages(openChat, chats)}
            </List>
            <div className={classes.input}>
              {/*TODO: TO ADD MESSAGES */}
              <TextInput user={'user1'}/>
            </div>
          </div>
        </Paper>
      </div>
  )
}


export default ChatComponent
