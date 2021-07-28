import React from 'react';
import List from '@material-ui/core/List';
import MenuBar from './app-bar/MenuBar';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    height: '100%',
    width: '100%',
    overflow: 'auto',
    backgroundColor: '#fafafa'
  }
})

const ChatList = ({messages}) => {
  const classes = useStyles()
  return (
    <>
      <MenuBar pageName='Chats'/>
      <List className={classes.list}>
        {messages}
      </List>
    </>
  )
}

export default ChatList
