import React from 'react';
import Card from '@material-ui/core/Card';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import {CardActionArea, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '10px',
    paddingBottom: '10px',
    display: 'flex',
    justifyContent: 'flex-start',
    '& > svg + *': {
      marginLeft: '30px'
    }
  },
  icon: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  }
}))

const MenuItemCard = ({name, payload}) => {
  const classes = useStyles()

  return (
    <Card elevation={0} style={{borderRadius: '10px'}}>
      <CardActionArea className={classes.container} onClick={payload}>
        <EditOutlinedIcon color={'action'} className={classes.icon}/>
        <Typography>
          {name}
        </Typography>
      </CardActionArea>
    </Card>
  )
}

export default MenuItemCard
