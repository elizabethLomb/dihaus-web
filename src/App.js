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
import UserRegistrer from './components/user/UserRegistrer';
import UserBookingList from './components/user/UserBookingList';
import UserInbox from './components/user/UserInbox';

const App = () => {
  return (
    <div className="App">
      <MainNavBar/>

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/contact_hauser/:id' component={ContactHauser}/>
        <Route exact path='/:id/user/booking-list' component={UserBookingList}/>
        <Route exact path='/user/register' component={UserRegistrer}/>

        <Route exact path='/user/inbox/:id' component={UserInbox}/>
        <Route exact path='/:location/homes' component={PropertiesList}/>
        <Route exact path='/home/:id' component={PropertyDetail}/>
        <Route exact path="/user/:id" component={UserProfile}/>
        

        <Redirect to="/"/>
      </Switch>
    </div>
  )
}

export default App;
