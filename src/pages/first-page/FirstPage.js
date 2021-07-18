import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core';
import ChatCard from '../../components/chat-card/ChatCard';
import TextInput from '../../components/chat-text-input/TextInput';
import Box from '@material-ui/core/Box';


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
    marginBottom: "30px"
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
        <Paper
          className={classes.paper}
        >
          <Box className={classes.box}>
            {getMessages(messages)}
          </Box>
        <TextInput addMessage={addMsg} user={"user1"}/>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default FirstPage
