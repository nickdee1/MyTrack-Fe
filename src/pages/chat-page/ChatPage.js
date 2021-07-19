import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListChats from '../../components/list-chats/ListChats';
import ChatComponent from '../../components/chat/ChatComponent';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    maxWidth: '2400px',
    overflow: 'hidden',
    lineClamp: 2,
  }
})


const ChatPage = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="row"
      justify="center"
      className={classes.container}
    >
      <Grid
        item
        xs={12}
        md={3}
        lg={3}
      >
        <ListChats/>
      </Grid>
      <Grid
        item
        xs={0}
        md={9}
        lg={9}
      >
        <ChatComponent/>
      </Grid>
    </Grid>
  )
}

export default ChatPage
