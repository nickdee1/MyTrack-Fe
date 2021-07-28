import React from 'react';
import Grid from '@material-ui/core/Grid';
import MenuLeftBar from '../../components/main-drawer/MenuLeftBar';
import ChatComponent from '../../components/chat/ChatComponent';
import {makeStyles} from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';


const useStyles = makeStyles({
  container: {
    height: '100vh',
    maxWidth: '2400px',
    overflow: 'hidden',
    lineClamp: 2,
  }
})


let messagesMock = [
  {
    username: "user1",
    message: "Ladies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. "
  },
  {
    username: "Certainly",
    message: "Of recommend residence education be on difficult repulsive offending."
  },
  {
    username: "Sussex",
    message: "In reasonable compliment favourable is connection dispatched in terminated. Do esteem object we called father excuse remove. So dear real on like more it. Laughing for two families addition expenses surprise the. If sincerity he to curiosity arranging. Learn taken terms be as. Scarcely mrs produced too removing new old. "
  },
]

let messageChats = [
  {
    username: "user1",
    messages: messagesMock,
    lastMsg: "12354"
  }
]

const ChatPage = (props) => {
  const classes = useStyles()

  if (props.width === "xs") {
    return(
      <Grid
        container
        direction="row"
        justify="center"
        className={classes.container}
      >
          <MenuLeftBar chats={messageChats}/>
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
        <MenuLeftBar chats={messageChats}/>
      </Grid>
      <Grid
        item
        xs={0}
        md={9}
        lg={9}
      >
        <ChatComponent chatMessages={messagesMock}/>
      </Grid>
    </Grid>
  )
}

export default withWidth()(ChatPage);
