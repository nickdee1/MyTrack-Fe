import React from 'react';
import {Avatar, makeStyles, Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  card: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
  }
})

const firstLetter = (name) => {
  return name.charAt(0)
}


const ChatCard = ({username, msg}) => {
  const classes = useStyles()
  return (
    <Card
      elevation={0}
      className={classes.card}
    >
      <Grid container wrap="nowrap" direction="row" spacing={1}>
        <Grid item>
          <Avatar
            sx={{ bgcolor: deepPurple[500] }}
          >
            {firstLetter(username)}
          </Avatar>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="subtitle2" style={{ fontWeight: 600 }}>
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

export default ChatCard
