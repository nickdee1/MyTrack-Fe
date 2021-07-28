import React from 'react';
import MenuBar from './app-bar/MenuBar';
import {makeStyles} from '@material-ui/core';
import MenuItemCard from '../common/MenuItemCard';

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
        <MenuItemCard name={'Settings'}/>
      </div>
    </>
  )
}

export default ProfileSettings
