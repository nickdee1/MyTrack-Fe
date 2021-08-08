import React from 'react';
import {makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AppRouter from './AppRouter';


const useStyles = makeStyles({
  container: {
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
  },
  list: {
    height: '100%',
    width: '100%',
    overflow: 'auto',
    backgroundColor: '#fafafa'
  }
})

const MenuLeftBar = () => {
  const classes = useStyles()
  return (
    <Grid
      className={classes.container}
      container
    >
      <AppRouter/>
    </Grid>
  )
}

export default MenuLeftBar
