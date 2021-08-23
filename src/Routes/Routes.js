import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import ChatsList from "../ChatsList/ChatsList";
import SW from "../SW/SW";
import HomePage from "../HomePage/HomePage";
import Page404 from "../Page404/Page404";
import Profile from "../Profile/Profile";
import { persistor, store } from "../Store/Store";
import { Login } from "../Login/Login";
import firebase from "firebase";
import PublicRoute from "../hocs/PublicRoute";
import PrivateRoute from "../hocs/PrivateRoute";
import { Signup } from "../Signup/Signup";

export default function Routes(props) {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Profile">Profile</Link>
              </li>
              <li>
                <Link to="/Chats">Chats</Link>
              </li>
              <li>
                <Link to="/SW">Star wars</Link>
              </li>
              <li>
                <Link to="/Signup">Registration</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <PublicRoute authenticated={authed} exact path="/">
              <HomePage />
            </PublicRoute>
            <PublicRoute authenticated={authed} path="/Login">
              <Login />
            </PublicRoute>
            <PublicRoute authenticated={authed} path="/Signup">
              <Signup />
            </PublicRoute>
            <PrivateRoute authenticated={authed} path="/Profile">
              <Profile />
            </PrivateRoute>
            <PrivateRoute
              authenticated={authed}
              path="/Chats/:chatId?"
              render={(data) => <ChatsList match={data.match} />}
            ></PrivateRoute>
            <PublicRoute authenticated={authed} path="/SW">
              <SW />
            </PublicRoute>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
