import React from 'react';
import {CardActionArea, makeStyles, Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import UserAvatar from '../common/UserAvatar';
import {useDispatch} from 'react-redux';
import {openChat} from '../../redux/actions';


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

const drawUnreadPin = unreadCount => {
  if (unreadCount) {
    return <Chip label={unreadCount} color="primary"/>
  }
}

const ChatCard = ({chat}) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <Card
      className={classes.card}
      elevation={0}
    >
      <CardActionArea onClick={() => dispatch(openChat(chat.id))}>
        <Grid
          className={classes.cardContainer}
          container
          wrap="nowrap"
          direction="row"
          spacing={1}
        >
          <div className={classes.chatContent}>
            <UserAvatar username={chat.title} standardSize={false}/>
            <Grid item className={classes.chatTextContainer}>
              <Grid item xs>
                <Typography variant="subtitle2" style={{fontWeight: 600}} noWrap>
                  {chat.title}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="body2" noWrap>
                  {chat.lastMessage.content.text}
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
                {drawUnreadPin(chat.unreadCount)}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  )
}

export default ChatCard
