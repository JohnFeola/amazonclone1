//used this tutorial, with many changes: https://www.youtube.com/watch?v=RDV3Z1KCBvo


//currently at 2:09:24 !!! just created reducer.js, and will probably create 'stateProvider' next for this data layer to then pull numbers
//from components to shopping cart total. 

import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';


function App() {
  return (
    <Router>
    <div className="app">
    

      <Switch>
        <Route path="/checkout" exact>
        <Header />
          <Checkout />
        </Route>

        <Route path="/" exact>
        <Header />
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
