import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import ChatsList from "../ChatsList/ChatsList";
import HomePage from "../HomePage/HomePage";
import Page404 from "../Page404/Page404";
import Profile from "../Profile/Profile";
import { persistor, store } from "../Store/Store";

export default function Routes(props) {
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
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route
              path="/Chats/:chatId?"
              render={(data) => <ChatsList match={data.match} />}
            ></Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
