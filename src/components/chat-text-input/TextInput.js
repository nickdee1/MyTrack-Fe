import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SendIcon from '@material-ui/icons/Send';
import {IconButton, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  button: {
    height: "100%"
  }
}))

const TextInput = ({addMessage, user}) => {
  const classes = useStyles()
  const [message, setMessage] = useState("a")

  return (
    <Paper
      className={classes.root}
      elevation={0}
    >
      <InputBase
        className={classes.input}
        multiline
        placeholder="Your message goes here..."
        onChange={e => {
          e.preventDefault()
          setMessage(e.target.value)
        }}
      />
      <IconButton
        className={classes.button}
        color="primary"
        onClick={event => {
          event.preventDefault()
          const msg = {
            username: user,
            message: message
          }
          addMessage(msg)
        }}
      >
        <SendIcon/>
      </IconButton>
    </Paper>
  )
}

export default TextInput
