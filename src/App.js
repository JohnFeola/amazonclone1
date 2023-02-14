//used this tutorial, with many changes: https://www.youtube.com/watch?v=RDV3Z1KCBvo



//now at 4:03:11 ... was just in Login.js doing 'useHistory' ... registering now works 

//now at 3:51:21, about to finish user authentication, then deploy 

import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase.js';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

function App() {
  const [{}, dispatch] = useStateValue();


  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log('user ->', authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      }else{
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })
  }, [])
  return (
    <Router>
    <div className="app">
    

      <Switch>
        <Route path="/login">
         <Login/>
        </Route>

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
