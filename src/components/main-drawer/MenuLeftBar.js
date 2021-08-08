import React from 'react';
import ChatCard from '../chat-card/ChatCard';
import {makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AppRouter from './AppRouter';

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
