import React from 'react';
import {CardActionArea, makeStyles, Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import UserAvatar from '../common/UserAvatar';


const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 0
  },
  cardContainer: {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '10px',
    paddingBottom: '10px',
    borderRadius: '0px',
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between'
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  chatTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '80%',
    lineCamp: 2,
    alignContent: 'space-between',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  chatContent: {
    display: 'flex',
    width: '80%',
    textOverflow: 'ellipsis',
  }
}))

const ChatCard = ({username, lastMsg}) => {
  const classes = useStyles()
  return (
    <Card
      className={classes.card}
      elevation={0}
    >
      <CardActionArea>
        <Grid
          className={classes.cardContainer}
          container
          wrap="nowrap"
          direction="row"
          spacing={1}
        >
          <div className={classes.chatContent}>
            <UserAvatar username={username} standardSize={false}/>
            <Grid item className={classes.chatTextContainer}>
              <Grid item xs>
                <Typography variant="subtitle2" style={{fontWeight: 600}} noWrap>
                  {username}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="body2" noWrap>
                  {lastMsg}
                </Typography>
              </Grid>
            </Grid>
          </div>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="caption">17:00</Typography>
              </Grid>
              <Grid item>
                <Chip label="2" color="primary"/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  )
}

export default ChatCard
