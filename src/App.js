import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//COMPONENTS
import Home from './components/Home';
import MainNavBar from './components/misc/Navbar';
import Login from './components/misc/Login';
import PropertiesList from './components/PropertiesList';
import PropertyDetail from './components/PropertyDetail';
import UserProfile from './components/user/UserProfile';
import ContactHauser from './components/user/ContactHauser';

const App = () => {
  return (
    <div className="App">
      <MainNavBar/>

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>

        <Route exact path='/:location/homes' component={PropertiesList}/>
        <Route exact path='/home/:id' component={PropertyDetail}/>
        <Route exact path="/user/:id" component={UserProfile}/>
        <Route exact path='/contact_hauser/:id' component={ContactHauser}/>

        <Redirect to="/"/>
      </Switch>
    </div>
  )
}

export default App;
