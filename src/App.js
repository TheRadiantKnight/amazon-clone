import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login'
import {useStateValue} from './StateProvider'
import {auth} from './firbebase'

function App() {
  const [{user}, dispatch] = useStateValue();

    // Need a code snippet based on a given condition (useEffect) 
      const unsubscribe = useEffect (() => {
        // Listener for user action
        auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            // user logged in...
              dispatch({
                type: 'SET_USER',
                user: authUser, 
              });
          } else {
            // user logged out...
            dispatch({
              type: 'SET_USER',
              user: null, 
            });
          }
        });

        return () => {
          // Any cleanup operations goes here
          unsubscribe();
        }

      }, []);

      console.log(user);

  return (
    <Router> 
      <div className="app">
          <Switch> 
            <Route path="/checkout">
            <Header />
            <Checkout />            
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
            <Header />
            <Home />            
            </Route>   
          </Switch>
      </div>
    </Router>
  );
}

export default App;
