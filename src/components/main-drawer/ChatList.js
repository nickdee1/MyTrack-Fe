import React from 'react';
import List from '@material-ui/core/List';
import MenuBar from './app-bar/MenuBar';
import { connect } from 'react-redux';
import {makeStyles} from '@material-ui/core';
import ChatCard from '../chat-card/ChatCard';

const useStyles = makeStyles({
  list: {
    height: '100%',
    width: '100%',
    overflow: 'auto',
    backgroundColor: '#fafafa'
  }
})

const ChatList = ({syncChats}) => {
  const classes = useStyles()
  return (
    <>
      <MenuBar pageName='Chats'/>
      <List className={classes.list}>
        {syncChats.map(chat =>
          <ChatCard chat={chat}/>)
        }
      </List>
    </>
  )
}

const mapStateToProps = state => {
  return {
    syncChats: state.dialogs.data
  }
}

export default connect(mapStateToProps, null)(ChatList)
