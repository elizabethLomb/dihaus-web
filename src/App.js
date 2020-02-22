import React from 'react';
import { Switch, Route } from 'react-router-dom';

//COMPONENTS
import Home from './components/Home';
import MainNavBar from './components/misc/Navbar';
import Login from './components/misc/Login';
import PropertiesList from './components/PropertiesList';
import PropertyDetail from './components/PropertyDetail';

//ROUTES
// import { UserRoutes, PropertiesRoutes } from './services/DiHauseService'
// import {
//   LOGIN_URL,
//   PROPERTY_LOCATION_URL
// } from './services/constants'



const App = () => {
  return (
    <div className="App">
      <MainNavBar/>

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>

        <Route exact path='/:location/homes' component={PropertiesList}/>
        <Route exact path='/home/:id' component={PropertyDetail}></Route>
      </Switch>
    </div>
  )
}

export default App;
