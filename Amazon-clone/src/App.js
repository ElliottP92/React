import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';


function App() {
  const [{basket}, dispatch] = useStateValue();

  // userEffect Hook
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      // the user is logged in..

      dispatch({
        type: "SET_USER",
        user: authUser
      })
    } else {

      dispatch({
        type: "SET_USER",
        user: null
      })
    }
  })
  return () => {
    // any clean up
    unsubscribe();
  }
}, [])

  return (
    <Router>
        <div className="app">
        <Switch>
           {/* Checkout Page route */ }
          <Route path="/checkout">
          <Header/>
            <Checkout />
          </Route>
         {/* Login Page route */ }
          <Route path="/login">
           <Login/>
          </Route>
         {/* Default Page route */ }
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  
  );
}

export default App;
