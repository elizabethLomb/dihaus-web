import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import MainNavBar from './components/misc/Navbar';
import Login from './components/misc/Login'

const App = () => {
  return (
    <div className="App">
      <MainNavBar/>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </div>
  )
}

export default App;
