import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ChatList from './ChatList';
import ProfileSettings from './ProfileSettings';

const AppRouter = () => {

  return (
    <Router>
      <Switch>
        <Route path='/chats'>
          <ChatList/>
        </Route>
        <Route path='/settings'>
          <ProfileSettings/>
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouter
