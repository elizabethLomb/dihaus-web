import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import MainNavBar from './components/misc/Navbar';

const App = () => {
  return (
    <div className="App">
      <MainNavBar/>

      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  )
}

export default App;
