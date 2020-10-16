import React, { createContext, useState } from 'react';
import { Switch, Route} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking.js';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RoomBooking from './components/RoomBooking/RoomBooking';

export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header></Header>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/booking'>
            <Booking/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <PrivateRoute path="/search">
            <RoomBooking/>
          </PrivateRoute>
        </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
