import React from 'react';
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

const TextInput = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        multiline
        placeholder="Your message goes here..."
      />
      <IconButton
        className={classes.button}
        color="primary"
      >
        <SendIcon/>
      </IconButton>
    </Paper>
  )
}

export default TextInput
