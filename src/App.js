import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking.js';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/booking'>
            <Booking/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
