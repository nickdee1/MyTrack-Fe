import React from 'react';
import MenuBar from './app-bar/ListChatBar';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    height: '100%',
    width: '100%',
    overflow: 'auto',
    backgroundColor: '#fafafa'
  }
})

const  ProfileSettings = () => {
  const classes = useStyles()
  return (
    <>
      <MenuBar pageName='Profile'/>
      <div className={classes.list}>

      </div>
    </>
  )
}

export default ProfileSettings
