import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {makeStyles, Toolbar, Typography} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  }
}))

const ListCharBar = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6">
          Chats
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default ListCharBar
