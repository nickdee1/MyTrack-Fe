import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core';
import UserAvatar from '../common/UserAvatar';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import {useDispatch} from 'react-redux';
import {closeChat} from '../../redux/actions';

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
  },
  lastSeen: {
    color: "#616161"
  }
}))

const returnBack = (small, close) => {
  if (small) {
    return (
      <IconButton onClick={() => close()}>
        <ArrowBackIosIcon color="primary"/>
      </IconButton>
    )
  }
}

const ChatAppBar = ({title, lastSeen, small}) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return(
    <AppBar elevation={2} className={classes.appBar} position="static">
      <Toolbar>
        {returnBack(small, () => dispatch(closeChat()))}
        <UserAvatar username={"abc"} standardSize={true}/>
        <div className={classes.nameAndLastSeen}>
          <Typography variant="body1" className={classes.chatName} style={{fontWeight: 550}}>
            {title}
          </Typography>
          <Typography className={classes.lastSeen} variant="caption">
            {"last seen "} {lastSeen}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default ChatAppBar
