//used this tutorial, with many changes: https://www.youtube.com/watch?v=RDV3Z1KCBvo

import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';


function App() {
  return (
    //using 'BEM' naming convention
    <Router>
    <div className="app">
    <Header />

      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="/">
          <Home />
        </Route>

        
      </Switch>
    </div>
    </Router>
  );
}

export default App;


/*
UPDATES FROM TUTORIAL: 

Prajakta Keer
11 months ago (edited)
Few Updates :-

1) As per the new updated Firebase we must import Firebase as follows (firebase.js file):
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

2) useHistory is updated as useNavigate
import { Link, useNavigate } from 'react-router-dom'
const navigate = useNavigate ();
navigate('/')

3) <Switch> is deprecated in the lastest version of React instead use <Routes>
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
<Router>
      <div className="app">
        <Routes>
          <Route path = "/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={<Header />, <Checkout />} />
          <Route path = "/login" element={<Login />} />
        </Routes>
      </div>
    </Router>

4) Use this instead of history.replace
navigate('/orders', { replace: true });
*/
