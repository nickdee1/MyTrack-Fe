import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Typography} from '@material-ui/core';
import AppBarPopper from './AppBarPopper';

const MenuBar = ({pageName}) => {

  return (
    <AppBar position="static">
      <Toolbar>
        <AppBarPopper/>
        <Typography variant="h6">
          {pageName}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default MenuBar
