import React from 'react';
import {Avatar, makeStyles} from '@material-ui/core';
import deepPurple from '@material-ui/core/colors/deepPurple';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}))

const firstLetter = (name) => {
  return name.charAt(0)
}

const UserAvatar = ({username, standardSize}) => {
  let classes = useStyles()

  return standardSize ?
    (
      <Avatar
        sx={{bgcolor: deepPurple[500]}}
      >
        {firstLetter(username)}
      </Avatar>
    ) :
    (
      <Avatar
        className={classes.avatar}
        sx={{bgcolor: deepPurple[500]}}
      >
        {firstLetter(username)}
      </Avatar>
    )
}

export default UserAvatar
