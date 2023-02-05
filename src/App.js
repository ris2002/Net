/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./App.css";
import Hsrc from "./Hsrc";
import Nav from "./Nav";
import MovPage from "./MovPage1";
import Kids from "./Kids";
import Movies from "./Movies";
import TVshows from "./TVshows";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profile from "./Profile";
import Search from "./Search";
import Movie from "./Movie";
import TransitionsModal from "./Odal";
import { deleteq } from "./userSlice";
function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
        dispatch(deleteq(userAuth.email));
      }
    });
    return unsubscribe;
  }, [dispatch]);

  //const user =null;
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/" component={Hsrc} />
            <Route path="/MovPage1" component={MovPage} />
            <Route path="/Movies" component={Movies} />
            <Route path="/Kids" component={Kids} />
            <Route path="/TV" component={TVshows} />
            <Route path="/Profiles" component={Profile} />
            <Route path="/modal" component={TransitionsModal} />
            <Route path="/movie" component={Movie} />
         
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;