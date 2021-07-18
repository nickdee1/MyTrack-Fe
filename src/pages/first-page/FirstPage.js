import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core';
import ChatCard from '../../components/chat-card/ChatCard';
import TextInput from '../../components/chat-text-input/TextInput';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


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

const useStyles = makeStyles({
  container: {
    marginTop: "40px",
    height: "100%",
  },
  box: {
    marginTop: "15px",
    marginBottom: "30px"
  },
  appBar: {
    borderRadius: "5px 5px 0px 0px",
  }
})

const getMessages = (messages) => {
  return messages.map(msg =>
    <ChatCard username={msg.username} msg={msg.message}/>
  )
}

const FirstPage = () => {
  const classes = useStyles()
  const [messages, setMessages] = useState(messagesMock)

  const addMsg = (msg) => {
    let out = [...messages, msg]
    setMessages(out)
  }

  return (
    <div>
      <Grid
        fluid
        height = {1}
        container
        justify = "center"
        className={classes.container}
      >
        <Grid
          item
          xs={10}
          md={8}
        >
          <Paper>
            <AppBar position="static" className={classes.appBar}>
              <Toolbar>
                <Typography>
                  Chat
                </Typography>
              </Toolbar>
            </AppBar>
            <Box className={classes.box}>
              {getMessages(messages)}
            </Box>
            <TextInput addMessage={addMsg} user={"user1"}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default FirstPage
