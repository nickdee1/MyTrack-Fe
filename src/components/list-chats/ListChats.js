import React from 'react';
import ChatCard from '../chat-card/ChatCard';
import List from '@material-ui/core/List';
import {makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ListCharBar from './app-bar/ListChatBar';

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
  return messages.map(msg =>
    <ChatCard username={msg.username} lastMsg={msg.message}/>
  )
}

const useStyles = makeStyles({
  container: {
    height: '100vh',
    overflow: "hidden",
  },
  list: {
    height: "100%",
    width: "100%",
    overflow: 'auto',
    backgroundColor: "#fafafa"
  }
})

const ListChats = () => {
  const classes = useStyles()
  return (
    <Grid
      className={classes.container}
      container
    >
      <ListCharBar/>
      <List
        className={classes.list}
      >
        {getMessages(mockChats)}
      </List>
    </Grid>
  )
}

export default ListChats
