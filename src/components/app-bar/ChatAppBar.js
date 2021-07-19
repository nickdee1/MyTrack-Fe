import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core';
import UserAvatar from '../common/UserAvatar';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#ffffff"
  },
  nameAndLastSeen: {
    display: "flex",
    flexDirection: "column",
    marginLeft: theme.spacing(2)
  },
  chatName: {
    color: "#000000"
  }
}))

const ChatAppBar = ({title, lastSeen}) => {
  const classes = useStyles()

  return(
    <AppBar elevation={2} className={classes.appBar} position="static">
      <Toolbar>
        <UserAvatar username={"abc"} standardSize={true}/>
        <div className={classes.nameAndLastSeen}>
          <Typography variant="body1" className={classes.chatName} style={{fontWeight: 550}}>
            {title}
          </Typography>
          <Typography className={classes.chatName} variant="caption">
            {"last seen "} {lastSeen}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default ChatAppBar
