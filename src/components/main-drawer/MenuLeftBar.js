import React from 'react';
import ChatCard from '../chat-card/ChatCard';
import {makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AppRouter from './AppRouter';

const mockChats = [
  {
    username: 'user1',
    message: 'Ladies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. '
  },
  {
    username: 'Certainly',
    message: 'Of recommend residence education be on difficult repulsive offending.'
  },
  {
    username: 'user1',
    message: 'Ladies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment.Ladies others the six desire age. Bred am soon park past read by lain. As excuse eldest no momentLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no momentLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no momentLadies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment '
  },
  {
    username: 'Certainly',
    message: 'Of recommend residence education be on difficult repulsive offending.'
  },
]

const getMessages = (messages) => {
  return messages.map(chats =>
    <ChatCard username={chats.username} lastMsg={chats.lastMsg}/>
  )
}

const useStyles = makeStyles({
  container: {
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
  },
  list: {
    height: '100%',
    width: '100%',
    overflow: 'auto',
    backgroundColor: '#fafafa'
  }
})

const MenuLeftBar = ({chats}) => {
  const classes = useStyles()
  return (
    <Grid
      className={classes.container}
      container
    >
      <AppRouter messages={getMessages(chats)}/>
    </Grid>
  )
}

export default MenuLeftBar
