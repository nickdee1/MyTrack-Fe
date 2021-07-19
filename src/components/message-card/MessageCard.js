import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import UserAvatar from '../common/UserAvatar';


const useStyles = makeStyles({
  card: {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '10px',
    paddingBottom: '10px',
    borderRadius: '0px'
  }
})


const MessageCard = ({username, msg}) => {
  const classes = useStyles()
  return (
    <Card
      elevation={0}
      className={classes.card}
    >
      <Grid container wrap="nowrap" direction="row" spacing={1}>
        <Grid item>
          <UserAvatar
            username={username}
            standardSize={true}
          />
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="subtitle2" style={{fontWeight: 600}}>
                {username}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                {msg}
              </Typography>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Card>
  )
}

export default MessageCard
