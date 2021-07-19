import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  appBar: {
    borderRadius: "5px 5px 0px 0px",
  },
})

const ChatAppBar = () => {
  const classes = useStyles()

  return(
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography>
          Chat
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default ChatAppBar
