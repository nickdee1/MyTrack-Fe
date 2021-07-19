import React from 'react';
import {CardActionArea, makeStyles, Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import UserAvatar from '../common/UserAvatar';


const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 0
  },
  cardContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: "0px",
  },
  messageText: {
    width: "80%",
    overflow: "hidden",
    lineClamp: 2,
    maxWidth: "32vh"
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  usernameAndMessage: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
}))

const ChatCard = ({username, lastMsg}) => {
  const classes = useStyles()
  return(
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
          <Grid item>
            <UserAvatar username={username} standardSize={false}/>
          </Grid>
          <Grid item>
            <Grid className={classes.usernameAndMessage} container direction="column">
              <Grid item xs zeroMinWidth>
                <Typography variant="subtitle2" style={{ fontWeight: 600 }} noWrap>
                  {username}
                </Typography>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography variant="body2" className={classes.messageText} noWrap>
                  {lastMsg}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
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
