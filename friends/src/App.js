import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Login from './components/Login'
import { FriendList } from './components/FriendList'
import PrivateRoute from './components/PrivateRoute'


import './App.css';




function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <Link to="/friends">Friends</Link>
        <Switch>
          <Route path='/login' component={Login} />
          <PrivateRoute path='/friends' component={FriendList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
