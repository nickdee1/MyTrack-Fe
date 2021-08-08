import React from 'react';
import Grid from '@material-ui/core/Grid';
import MenuLeftBar from '../../components/main-drawer/MenuLeftBar';
import ChatComponent from '../../components/chat/ChatComponent';
import {makeStyles} from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import {useSelector} from 'react-redux';


const useStyles = makeStyles({
  container: {
    height: '100vh',
    maxWidth: '2400px',
    overflow: 'hidden',
    lineClamp: 2,
  }
})

const ChatPage = (props) => {
  const classes = useStyles()
  const openChat = useSelector(state => state.openChat.openChat)

  if (props.width === 'xs') {
    if (openChat !== -1) {
      return (
        <Grid
          container
          direction="row"
          justify="center"
          className={classes.container}
        >
          <ChatComponent small={true}/>
        </Grid>)
    }
    return (
      <Grid
        container
        direction="row"
        justify="center"
        className={classes.container}
      >
        <MenuLeftBar/>
      </Grid>
    )
  }

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
        <MenuLeftBar/>
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

export default withWidth()(ChatPage);
