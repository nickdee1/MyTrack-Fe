import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core';
import ChatMessageCard from '../message-card/MessageCard';
import TextInput from '../chat-text-input/TextInput';
import List from '@material-ui/core/List';
import ChatAppBar from '../app-bar/ChatAppBar';


let messagesMock = [
  {
    username: 'user1',
    message: 'Ladies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. '
  },
  {
    username: 'Certainly',
    message: 'Of recommend residence education be on difficult repulsive offending.'
  },
  {
    username: 'Sussex',
    message: 'In reasonable compliment favourable is connection dispatched in terminated. Do esteem object we called father excuse remove. So dear real on like more it. Laughing for two families addition expenses surprise the. If sincerity he to curiosity arranging. Learn taken terms be as. Scarcely mrs produced too removing new old. '
  },
]

const useStyles = makeStyles({
  container: {
    height: '100vh',
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

const getMessages = (messages) => {
  return messages.map(msg =>
    <ChatMessageCard username={msg.username} msg={msg.message}/>
  )
}

const ChatComponent = ({small, chatMessages}) => {
  const classes = useStyles()
  const [messages, setMessages] = useState(chatMessages)

  const addMsg = (msg) => {
    let out = [...messages, msg]
    setMessages(out)
  }

  return (
    <div>
      <Grid
        className={classes.container}
        container
        direction="row"
      >
        <Grid
          item
        >
          <Paper className={classes.paper}>
            <ChatAppBar small={small} title={'Personal chat'} lastSeen={'17:00'}/>

            <div className={classes.chatListAndInput}>
              <List
                className={classes.list}
                style={{maxHeight: '80vh', overflow: 'auto'}}
              >
                {getMessages(messages)}
              </List>
              <div className={classes.input}>
                <TextInput addMessage={addMsg} user={'user1'}/>
              </div>
            </div>

          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default ChatComponent
